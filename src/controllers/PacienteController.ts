import { Request, Response} from "express";
import { PacienteService } from "../services/PacienteService";

class PacienteController {

  async findAll(request: Request, response: Response) {
    const pacienteService = new PacienteService();

    const paciente = await pacienteService.findAll(request.info.consultorio.id);
    return response.json(paciente);
  }

  async createPaciente(request: Request, response: Response) {
    try {
    const newPaciente = request.body;

    const pacienteService = new PacienteService();

    const paciente = await pacienteService.create(newPaciente);

    return response.json(paciente);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }
}

export { PacienteController };