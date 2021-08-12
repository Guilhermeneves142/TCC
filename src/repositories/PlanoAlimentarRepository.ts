import { EntityRepository, Repository } from "typeorm";
import { PlanoAlimentar } from "../entities/PlanoAlimentar";

@EntityRepository(PlanoAlimentar)
class PlanoAlimentarRepository extends Repository<PlanoAlimentar>{

}

export { PlanoAlimentarRepository }