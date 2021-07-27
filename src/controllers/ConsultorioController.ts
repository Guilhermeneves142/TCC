import { Request, Response} from "express";
import { ConsultorioService } from "../services/ConsultorioService";
import { NutricionistaService } from "../services/NutricionistaService";

class ConsultorioController {

  async createConsultorio(request: Request, response: Response) {
    const { consultorio, idNutricionista} = request.body;
    const consultorioService = new ConsultorioService();
    const nutricionistaService = new NutricionistaService();
    const consultorioCreated = await consultorioService.createConsultorio(consultorio);
    nutricionistaService.setConsultorio(idNutricionista, consultorio.id);
    return response.json(consultorioCreated);
  }

  async findAll(request: Request, response: Response) {
    const consultorioService = new ConsultorioService();

    const consultorio = await consultorioService.findAll();
    return response.json(consultorio);
  }
}

export { ConsultorioController };