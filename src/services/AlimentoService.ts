import { getCustomRepository } from "typeorm";
import { Alimento } from "../entities/Alimento";
import { AlimentoRepository } from "../repositories/AlimentoRepository";

class AlimentoService {

  async findAll(){
    const alimentoRepository = getCustomRepository(AlimentoRepository);

    return alimentoRepository.find();
  }

  async create(alimento: Alimento) {
    const alimentoRepository = getCustomRepository(AlimentoRepository);

    const newAlimento = alimentoRepository.create(alimento);

    await alimentoRepository.save(newAlimento);

    return newAlimento;
  }
}

export {AlimentoService};