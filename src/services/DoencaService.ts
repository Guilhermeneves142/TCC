import { getCustomRepository } from "typeorm";
import { DoencaRepository } from "../repositories/DoencaRepository";

class DoencaService {

  async findAll(){
    const doencaRepository = getCustomRepository(DoencaRepository);

    const doenca = await doencaRepository.find();

    return doenca;
  }
}

export {DoencaService};