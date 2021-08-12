import { Request, Response} from "express";
import { ExameService } from "../services/ExameService";

class ExameController {

  async findAll(request: Request, response: Response) {
    const exameService = new ExameService();

    const exame = await exameService.findAll();
    return response.json(exame);
  }
}

export { ExameController };