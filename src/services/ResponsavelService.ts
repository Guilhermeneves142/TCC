import { getCustomRepository } from "typeorm";
import { ResponsavelRepository } from "../repositories/ResponsavelRepository";

class ResponsavelService {

  async findAll(){
    const responsavelRepository = getCustomRepository(ResponsavelRepository);

    const responsavel = await responsavelRepository.find();

    return responsavel;
  }
}

export {ResponsavelService};