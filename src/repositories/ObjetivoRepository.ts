import { EntityRepository, Repository } from "typeorm";
import { Objetivo } from "../entities/Objetivo";

@EntityRepository(Objetivo)
class ObjetivoRepository extends Repository<Objetivo>{

}

export { ObjetivoRepository }