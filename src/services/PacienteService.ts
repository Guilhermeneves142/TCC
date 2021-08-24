import { getCustomRepository } from "typeorm";
import { Paciente } from "../entities/Paciente";
import { PacienteRepository } from "../repositories/PacienteRepository";

class PacienteService {

  async findAll(idConsultorio: string){
    const pacienteRepository = getCustomRepository(PacienteRepository);

    return pacienteRepository.find({id: idConsultorio});
  }

  async create(paciente: Paciente) {
    const pacienteRepository = getCustomRepository(PacienteRepository);

    var newPaciente = pacienteRepository.create(paciente);

    await pacienteRepository.save(newPaciente);

    return newPaciente;
  }
}

export {PacienteService};