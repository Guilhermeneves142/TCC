import { EntityRepository, Repository } from "typeorm";
import { Antropometrico } from "../entities/Antropometrico";

@EntityRepository(Antropometrico)
class AntropometricoRepository extends Repository<Antropometrico>{

}

export { AntropometricoRepository }