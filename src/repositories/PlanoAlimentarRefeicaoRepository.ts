import { EntityRepository, Repository } from "typeorm";
import { PlanoAlimentarRefeicao } from "../entities/PlanoAlimentarRefeicao";

@EntityRepository(PlanoAlimentarRefeicao)
class PlanoAlimentarRefeicaoRepository extends Repository<PlanoAlimentarRefeicao>{

}

export { PlanoAlimentarRefeicaoRepository }