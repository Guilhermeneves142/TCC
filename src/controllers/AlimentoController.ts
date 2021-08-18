import { Request, Response} from "express";
import { AlimentoService } from "../services/AlimentoService";

class AlimentoController {

  async findAll(request: Request, response: Response) {
    const alimentoService = new AlimentoService();

    const alimentos = await alimentoService.findAll(request.headers.authorization);
    return response.json(alimentos);
  }

  async createAlimento(request: Request, response: Response) {
    try {
      const alimentoService = new AlimentoService();
      const alimento = await alimentoService.create(request.body);
      return response.json(alimento); 
    } catch (error) {
      return response.status(500).json({
        error:error.message,
        status: 500
      }) 
    }
  }
}

export { AlimentoController };