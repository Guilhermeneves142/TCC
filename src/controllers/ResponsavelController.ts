import { Request, Response} from "express";
import { ResponsavelService } from "../services/ResponsavelService";

class ResponsavelController {

  async findAll(request: Request, response: Response) {
    const responsavelService = new ResponsavelService();

    const responsavel = await responsavelService.findAll(request.info.consultorio.id);
    return response.json(responsavel);
  }

  async createResponsavel(request: Request, response: Response) {
    try {
    const newResponsavel = request.body;

    const responsavelService = new ResponsavelService();

    const responsavel = await responsavelService.create(newResponsavel);

    return response.json(responsavel);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }
}

export { ResponsavelController };