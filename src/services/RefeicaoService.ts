import { getCustomRepository } from "typeorm";
import { RefeicaoRepository } from "../repositories/RefeicaoRepository";

class RefeicaoService {

  async findAll(){
    const refeicaoRepository = getCustomRepository(RefeicaoRepository);

    const refeicao = await refeicaoRepository.find();

    return refeicao;
  }
}

export {RefeicaoService};