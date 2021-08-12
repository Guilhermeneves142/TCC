import { Request, Response} from "express";
import { AlimentoService } from "../services/AlimentoService";

class AlimentoController {

  async findAll(request: Request, response: Response) {
    const alimentoService = new AlimentoService();

    const alimentos = await alimentoService.findAll();
    return response.json(alimentos);
  }
}

export { AlimentoController };