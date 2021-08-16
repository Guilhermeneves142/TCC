import { getCustomRepository } from "typeorm";
import { Objetivo } from "../entities/Objetivo";
import { ObjetivoRepository } from "../repositories/ObjetivoRepository";

class ObjetivoService {

  async findAll(){
    const objetivoRepository = getCustomRepository(ObjetivoRepository);

    return objetivoRepository.find();
  }

  async create(objetivo: Objetivo) {
    const objetivoRepository = getCustomRepository(ObjetivoRepository);
    const newObjetivo = objetivoRepository.create(objetivo);
    await objetivoRepository.save(newObjetivo);

    return newObjetivo;
  }

  async findById(id: string){
    const objetivoRepository = getCustomRepository(ObjetivoRepository);
    return objetivoRepository.findOne(id);
  }
}

export {ObjetivoService};