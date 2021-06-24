import { EntityRepository, Repository } from "typeorm";
import { Nutricionista } from "../entities/Nutricionista";

@EntityRepository(Nutricionista)
class NutricionistaRepository extends Repository<Nutricionista>{

}

export { NutricionistaRepository }