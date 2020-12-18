import {Router} from 'express';
import AuthenticateUser from '../services/AuthenticateUser';

const sessionsRouter = Router();

sessionsRouter.post('/', async(request, response) =>{
    try{
        const {username, password, message, image} = request.body;

        const authenticateUser = new AuthenticateUser();

        const {user, token} = await authenticateUser.execute({
            username,
            password,
            message,
            image
        });

        const userWithoutPassword = {
            id: user.id,
            username: user.username,
            message: user.message,
            image: user.image,
            date: user.date,
          };


        return response.json({userWithoutPassword, token});

    } catch(err){
        return response.status(400).json({error: err.message});
    }
    });

export default sessionsRouter;