import { Request, Response} from "express";
import { ConsultorioService } from "../services/ConsultorioService";

class ConsultorioController {

  async createConsultorio(request: Request, response: Response) {
    const { nome, telefone, endereco, celular} = request.body;
    const consultorioService = new ConsultorioService();
      const consultorio = await consultorioService.createConsultorio({nome, telefone, endereco, celular});
      return response.json(consultorio);
  }

  async findAll(request: Request, response: Response) {
    const consultorioService = new ConsultorioService();

    const consultorio = await consultorioService.findAll();
    return response.json(consultorio);
  }
}

export { ConsultorioController };