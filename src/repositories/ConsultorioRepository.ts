import { EntityRepository, Repository } from "typeorm";
import { Consultorio } from "../entities/Consultorio";

@EntityRepository(Consultorio)
class ConsultorioRepository extends Repository<Consultorio>{

}

export { ConsultorioRepository }