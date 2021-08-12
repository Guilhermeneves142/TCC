import { getCustomRepository } from "typeorm";
import { AntropometricoRepository } from "../repositories/AntropometricoRepository";

class AntropometricoService {

  async findAll(){
    const antropometricoRepository = getCustomRepository(AntropometricoRepository);

    const antropometrico = await antropometricoRepository.find();

    return antropometrico;
  }
}

export {AntropometricoService};