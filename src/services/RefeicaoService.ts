import { getCustomRepository } from "typeorm";
import { Refeicao } from "../entities/Refeicao";
import { RefeicaoRepository } from "../repositories/RefeicaoRepository";

class RefeicaoService {

  async findAll(){
    const refeicaoRepository = getCustomRepository(RefeicaoRepository);

    return refeicaoRepository.find();
  }

  async createRefeicao(refeicao: Refeicao) {
    const refeicaoRepository = getCustomRepository(RefeicaoRepository);
    
    const newRefeicao = refeicaoRepository.create(refeicao);

    await refeicaoRepository.save(newRefeicao);

    return newRefeicao;
  }
}

export {RefeicaoService};