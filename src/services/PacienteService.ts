import { getCustomRepository } from "typeorm";
import { Paciente } from "../entities/Paciente";
import { Responsavel } from "../entities/Responsavel";
import { PacienteRepository } from "../repositories/PacienteRepository";
import { ResponsavelRepository } from "../repositories/ResponsavelRepository";

class PacienteService {

  async findAll(idConsultorio: string){
    const pacienteRepository = getCustomRepository(PacienteRepository);
    return pacienteRepository.find({consultorio: {id: idConsultorio}});
  }

  async create(paciente: Paciente, responsavel: Responsavel) {
    const pacienteRepository = getCustomRepository(PacienteRepository);
    const responsavelRepository = getCustomRepository(ResponsavelRepository);

    if(responsavel){
      var newResponsavel = responsavelRepository.create(responsavel);
      await responsavelRepository.save(newPaciente);
      paciente.responsavel = newResponsavel;
    }
    var newPaciente = pacienteRepository.create(paciente);
    
    await pacienteRepository.save(newPaciente);

    return newPaciente;
  }
}

export {PacienteService};