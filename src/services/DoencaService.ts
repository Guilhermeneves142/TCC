import { getCustomRepository } from "typeorm";
import { Doenca } from "../entities/Doenca";
import { DoencaRepository } from "../repositories/DoencaRepository";

class DoencaService {

  async findAll(){
    const doencaRepository = getCustomRepository(DoencaRepository);

    return doencaRepository.find();
  }

  async createDoenca(doenca: Doenca) {
    const doencaRepository = getCustomRepository(DoencaRepository);

    const newDoenca = doencaRepository.create(doenca);

    await doencaRepository.save(newDoenca);
    
    return newDoenca;
  }
}

export {DoencaService};