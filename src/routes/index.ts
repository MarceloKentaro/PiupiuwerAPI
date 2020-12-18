import {Router} from 'express';
import piusRouter from './pius.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes'

const routes= Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/pius', piusRouter);

export default routes;