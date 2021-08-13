import { getCustomRepository } from "typeorm";
import { Objetivo } from "../entities/Objetivo";
import { ObjetivoRepository } from "../repositories/ObjetivoRepository";

class ObjetivoService {

  async findAll(){
    const objetivoRepository = getCustomRepository(ObjetivoRepository);

    const objetivo = await objetivoRepository.find();

    return objetivo;
  }

  async create(objetivo: Objetivo) {
    const objetivoRepository = getCustomRepository(ObjetivoRepository);
    const newObjetivo = objetivoRepository.create(objetivo);
    await objetivoRepository.save(newObjetivo);

    return newObjetivo;
  }

  async findById(id: string){
    const objetivoRepository = getCustomRepository(ObjetivoRepository);
    const objetivo = objetivoRepository.findOne(id);
    return objetivo;
  }
}

export {ObjetivoService};