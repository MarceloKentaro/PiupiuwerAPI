import {Router} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import CreateUser from '../services/CreateUser';

const usersRouter = Router();


usersRouter.get('/', async(request, response) =>{
    try{
        const user = request.body;

        const createUser = getRepository(User);

        const newUser = await createUser.find();


        return response.json(newUser);

    } catch(err){
        return response.status(400).json({error: err.message});
    }
    });

usersRouter.post('/', async(request, response) =>{
    try{
        const user = request.body;

        const createUser = new CreateUser();

        const newUser = await createUser.execute(user);

        const userWithoutPassword = {
            id: newUser.id,
            username: newUser.username,
            message: newUser.message,
            image: newUser.image,
            date: newUser.date,
          };

        return response.json(userWithoutPassword);

    } catch(err){
        return response.status(400).json({error: err.message});
    }
    });

export default usersRouter;