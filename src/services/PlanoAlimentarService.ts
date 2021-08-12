import { getCustomRepository } from "typeorm";
import { PlanoAlimentarRepository } from "../repositories/PlanoAlimentarRepository";

class PlanoAlimentarService {

  async findAll(){
    const planoAlimentarRepository = getCustomRepository(PlanoAlimentarRepository);

    const planoAlimentar = await planoAlimentarRepository.find();

    return planoAlimentar;
  }
}

export {PlanoAlimentarService};