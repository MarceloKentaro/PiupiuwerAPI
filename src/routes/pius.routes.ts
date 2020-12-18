import {Router} from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Piu from '../models/Piu';
import CreateLike from '../services/CreateLike';
import CreatePiu from '../services/CreatePius';
import DeletePiu from '../services/DeletePius';

const piusRouter = Router();

piusRouter.use(ensureAuthenticated);


piusRouter.get('/', async(request, response) =>{
    try{
        const {text, userId, date} = request.body;

        const createPiu = getRepository(Piu);

        const pius = await createPiu.find();

        return response.json(pius);

    } catch(err){
        return response.status(400).json({error: err.message});
    }
});


piusRouter.post('/', async(request, response) =>{
    try{
        const pius = request.body;

        const createPiu = new CreatePiu();

        const newPius = await createPiu.execute(pius);

        return response.json(newPius);

    } catch(err){
        return response.status(400).json({error: err.message});
    }
});

piusRouter.delete('/:id', async(request, response) =>{
    try{
        const {id} = request.params;

        const deletePiu = new DeletePiu();
        await deletePiu.execute(id);
        return response.status(204).send();

    } catch(err){
        return response.status(400).json({error: err.message});
    }
});


piusRouter.post('/like', async(request, response) =>{
    try{
        const pius = request.body;

        const createLike = new CreateLike();

        const newPius = await createLike.execute(pius);

        return response.json(newPius);

    } catch(err){
        return response.status(400).json({error: err.message});
    }
});


export default piusRouter;