import { EntityRepository, Repository } from "typeorm";
import { Alimento } from "../entities/Alimento";

@EntityRepository(Alimento)
class AlimentoRepository extends Repository<Alimento>{

}

export { AlimentoRepository }