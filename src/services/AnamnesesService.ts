import { getCustomRepository } from "typeorm";
import { AnamnesesRepository } from "../repositories/AnamnesesRepository";

class AnamnesesService {

  async findAll(){
    const anamnesesRepository = getCustomRepository(AnamnesesRepository);

    const anamneses = await anamnesesRepository.find();

    return anamneses;
  }
}

export {AnamnesesService};