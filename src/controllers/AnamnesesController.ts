import { Request, Response} from "express";
import { AnamnesesService } from "../services/AnamnesesService";

class AnamnesesController {

  async findAll(request: Request, response: Response) {
    const anamnesesService = new AnamnesesService();

    const anamneses = await anamnesesService.findAll();
    return response.json(anamneses);
  }
}

export { AnamnesesController };