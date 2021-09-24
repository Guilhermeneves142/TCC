import { getCustomRepository } from "typeorm";
import { PlanoAlimentar } from "../entities/PlanoAlimentar";
import { PlanoAlimentarRepository } from "../repositories/PlanoAlimentarRepository";
import { v4 as uuid } from "uuid";

class PlanoAlimentarService {

  async findAll(){
    const planoAlimentarRepository = getCustomRepository(PlanoAlimentarRepository);

    const planoAlimentar = await planoAlimentarRepository.find();

    return planoAlimentar;
  }

  async save(planoAlimentar: PlanoAlimentar) {
    const planoAlimentarRepository = getCustomRepository(PlanoAlimentarRepository);

    const newPlanoAlimentar = planoAlimentarRepository.create(planoAlimentar);
    return await planoAlimentarRepository.save(newPlanoAlimentar);
  }
}

export {PlanoAlimentarService};