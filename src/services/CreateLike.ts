import { getRepository } from 'typeorm';

import Piu from '../models/Piu';

interface Request{
    piuId: string,
    userId: string,
}

class CreateLike {
    public async execute({piuId, userId}: Request): Promise<Piu> {
        const piuRepository = getRepository(Piu);
        const pius = piuRepository.create({piuId:piuId , userId:userId});
        await piuRepository.save(pius);
        return pius;
    }
}

export default CreateLike;