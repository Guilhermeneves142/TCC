import { getCustomRepository } from "typeorm";
import { Responsavel } from "../entities/Responsavel";
import { ResponsavelRepository } from "../repositories/ResponsavelRepository";

class ResponsavelService {

  async findAll(id: string){
    const responsavelRepository = getCustomRepository(ResponsavelRepository);

    return responsavelRepository.find({id});
  }

  async create(responsavel: Responsavel) {
    const responsavelRepository = getCustomRepository(ResponsavelRepository);

    var newResponsavel = responsavelRepository.create(responsavel);

    await responsavelRepository.save(newResponsavel);

    return newResponsavel;
  }
}

export {ResponsavelService};