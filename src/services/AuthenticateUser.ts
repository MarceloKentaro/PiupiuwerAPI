import { getRepository } from 'typeorm';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';

interface Request{
    username: string,
    password: string,
    message: string,
    image: string,
}

interface Response{
    user: User;
    token: string;
}
class AuthenticateUser{
    public async execute({username, password}: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({where: {username}});

        if(!user){
            throw new Error('Incorrect email/password combination.');
        }

        const passwordVerified = await compare(password, user.password);

        if(!passwordVerified){
            throw new Error('Incorrect email/password combination.');
        }

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret,{
            subject: user.id,
            expiresIn,
        });

        return{
            user,
            token
        };
    }
}

export default AuthenticateUser;