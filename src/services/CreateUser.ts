import { getRepository } from 'typeorm';
import {hash} from 'bcryptjs';

import User from '../models/User';

interface Request{
    username: string,
    password: string,
    message?: string,
    image?: string,
    date: Date
}

class CreateUser {
    public async execute({username, password, message, image, date}: Request): Promise<User> {
        const hashedPassword = await hash(password, 8);

        const userRepository = getRepository(User);
        const user = userRepository.create({username:username, password:hashedPassword, message:message, image:image, date:date}); 
        await userRepository.save(user);
        return user;
    }
}

export default CreateUser;