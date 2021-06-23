import { EntityRepository, Repository } from "typeorm";
import { Consultorio } from "../entities/Consultorio";

@EntityRepository()
class ConsultorioRepository extends Repository<Consultorio>{

}

export { ConsultorioRepository }