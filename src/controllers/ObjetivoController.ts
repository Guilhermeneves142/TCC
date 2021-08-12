import { Request, Response} from "express";
import { ObjetivoService } from "../services/ObjetivoService";

class ObjetivoController {

  async findAll(request: Request, response: Response) {
    const objetivoService = new ObjetivoService();

    const objetivo = await objetivoService.findAll();
    return response.json(objetivo);
  }
}

export { ObjetivoController };