import { Request, Response} from "express";
import { AtendimentoService } from "../services/AtendimentoService";

class AtendimentoController {

  async findAll(request: Request, response: Response) {
    const atendimentoService = new AtendimentoService();

    const atendimento = await atendimentoService.findAll();
    return response.json(atendimento);
  }
}

export { AtendimentoController };