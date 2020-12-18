import {Router} from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateLike from '../services/CreateLike';

const piusRouter = Router();

piusRouter.use(ensureAuthenticated);

piusRouter.post('/like', async(request, response) =>{
    try{
        const pius = request.body;

        const createLike = new CreateLike();

        const newLikes = await createLike.execute(pius);

        return response.json(newLikes);

    } catch(err){
        return response.status(400).json({error: err.message});
    }
});

export default piusRouter;