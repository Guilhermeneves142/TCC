import { Request, Response} from "express";
import { DoencaService } from "../services/DoencaService";

class DoencaController {

  async findAll(request: Request, response: Response) {
    const doencaService = new DoencaService();

    const doenca = await doencaService.findAll();
    return response.json(doenca);
  }
}

export { DoencaController };