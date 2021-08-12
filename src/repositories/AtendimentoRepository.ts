import { EntityRepository, Repository } from "typeorm";
import { Atendimento } from "../entities/Atendimento";

@EntityRepository(Atendimento)
class AtendimentoRepository extends Repository<Atendimento>{

}

export { AtendimentoRepository }