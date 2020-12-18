import { getRepository } from 'typeorm';

import Piu from '../models/Piu';

interface Request{
    userId: string,
    message: string,
}

class CreatePiu {
    public async execute({userId, message}: Request): Promise<Piu> {
        const piuRepository = getRepository(Piu);
        const pius = piuRepository.create({userId:userId, message: message});
        await piuRepository.save(pius);
        return pius;
    }
}

export default CreatePiu;