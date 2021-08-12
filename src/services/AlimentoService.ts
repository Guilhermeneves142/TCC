import { getCustomRepository } from "typeorm";
import { AlimentoRepository } from "../repositories/AlimentoRepository";

class AlimentoService {

  async findAll(){
    const alimentoRepository = getCustomRepository(AlimentoRepository);

    const alimentos = await alimentoRepository.find();

    return alimentos;
  }
}

export {AlimentoService};