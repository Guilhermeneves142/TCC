import { getCustomRepository } from "typeorm";
import { ObjetivoRepository } from "../repositories/ObjetivoRepository";

class ObjetivoService {

  async findAll(){
    const objetivoRepository = getCustomRepository(ObjetivoRepository);

    const objetivo = await objetivoRepository.find();

    return objetivo;
  }
}

export {ObjetivoService};