import { getCustomRepository } from "typeorm";
import { ExameRepository } from "../repositories/ExameRepository";

class ExameService {

  async findAll(){
    const exameRepository = getCustomRepository(ExameRepository);

    const exame = await exameRepository.find();

    return exame;
  }
}

export {ExameService};