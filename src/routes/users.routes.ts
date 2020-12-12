import {Router} from 'express';
import routes from '.';

const usersRouter = Router();

const users = [];

usersRouter.post('/', (request, response) =>{
    const {username, password} = request.body

    const user = {
        id: uuid(),
        username,
        password
    }
    
    users.push(user)

    return response.json({message: 'Its working'});
});

export default usersRouter;