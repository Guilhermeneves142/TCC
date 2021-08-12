import { Request, Response} from "express";
import { AntropometricoService } from "../services/AntropometricoService";

class AntropometricoController {

  async findAll(request: Request, response: Response) {
    const antropometricoService = new AntropometricoService();

    const antropometrico = await antropometricoService.findAll();
    return response.json(antropometrico);
  }
}

export { AntropometricoController };