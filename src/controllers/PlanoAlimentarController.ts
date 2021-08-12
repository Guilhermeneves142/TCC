import { Request, Response} from "express";
import { PlanoAlimentarService } from "../services/PlanoAlimentarService";

class PlanoAlimentarController {

  async findAll(request: Request, response: Response) {
    const planoAlimentarService = new PlanoAlimentarService();

    const planoAlimentar = await planoAlimentarService.findAll();
    return response.json(planoAlimentar);
  }
}

export { PlanoAlimentarController };