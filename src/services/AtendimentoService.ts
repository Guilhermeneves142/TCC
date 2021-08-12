import { getCustomRepository } from "typeorm";
import { AtendimentoRepository } from "../repositories/AtendimentoRepository";

class AtendimentoService {

  async findAll(){
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);

    const atendimento = await atendimentoRepository.find();

    return atendimento;
  }
}

export {AtendimentoService};