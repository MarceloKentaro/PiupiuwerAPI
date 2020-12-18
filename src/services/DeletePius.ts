import { getRepository } from 'typeorm';

import Piu from '../models/Piu';

class DeletePiu {
    public async execute(id:string): Promise<void> {
        const piuRepository = getRepository(Piu);
        const piu = await piuRepository.findOne(id);
        await piuRepository.remove(piu);
    }
}

export default DeletePiu;