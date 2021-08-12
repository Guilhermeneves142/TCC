import { EntityRepository, Repository } from "typeorm";
import { Refeicao } from "../entities/Refeicao";

@EntityRepository(Refeicao)
class RefeicaoRepository extends Repository<Refeicao>{

}

export { RefeicaoRepository }