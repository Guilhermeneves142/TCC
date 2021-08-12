import { getCustomRepository } from "typeorm";
import { PacienteRepository } from "../repositories/PacienteRepository";

class PacienteService {

  async findAll(){
    const pacienteRepository = getCustomRepository(PacienteRepository);

    const paciente = await pacienteRepository.find();

    return paciente;
  }
}

export {PacienteService};