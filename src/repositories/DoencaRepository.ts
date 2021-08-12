import { EntityRepository, Repository } from "typeorm";
import { Doenca } from "../entities/Doenca";

@EntityRepository(Doenca)
class DoencaRepository extends Repository<Doenca>{

}

export { DoencaRepository }