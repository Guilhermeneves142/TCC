import { Request, Response} from "express";
import { DoencaService } from "../services/DoencaService";

class DoencaController {

  async findAll(request: Request, response: Response) {
    const doencaService = new DoencaService();

    const doenca = await doencaService.findAll();
    return response.json(doenca);
  }

  async createDoenca(request: Request, response: Response) {
    try {
      const doencaService = new DoencaService();
      const doenca = await doencaService.createDoenca(request.body);
      return response.json(doenca); 
    } catch (error) {
      return response.status(500).json({
        error:error.message,
        status: 500
      }) 
    }
  }
}

export { DoencaController };