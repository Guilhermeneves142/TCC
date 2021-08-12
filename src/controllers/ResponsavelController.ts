import { Request, Response} from "express";
import { ResponsavelService } from "../services/ResponsavelService";

class ResponsavelController {

  async findAll(request: Request, response: Response) {
    const responsavelService = new ResponsavelService();

    const responsavel = await responsavelService.findAll();
    return response.json(responsavel);
  }
}

export { ResponsavelController };