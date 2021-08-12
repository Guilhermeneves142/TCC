import { Request, Response} from "express";
import { PacienteService } from "../services/PacienteService";

class PacienteController {

  async findAll(request: Request, response: Response) {
    const pacienteService = new PacienteService();

    const paciente = await pacienteService.findAll();
    return response.json(paciente);
  }
}

export { PacienteController };