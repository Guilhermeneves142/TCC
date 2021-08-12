import { EntityRepository, Repository } from "typeorm";
import { Exame } from "../entities/Exame";

@EntityRepository(Exame)
class ExameRepository extends Repository<Exame>{

}

export { ExameRepository }