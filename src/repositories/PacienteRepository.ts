import { EntityRepository, Repository } from "typeorm";
import { Paciente } from "../entities/Paciente";

@EntityRepository(Paciente)
class PacienteRepository extends Repository<Paciente>{

}

export { PacienteRepository }