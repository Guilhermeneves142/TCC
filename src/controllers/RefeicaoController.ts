import { Request, Response} from "express";
import { RefeicaoService } from "../services/RefeicaoService";

class RefeicaoController {

  async findAll(request: Request, response: Response) {
    const refeicaoService = new RefeicaoService();

    const refeicao = await refeicaoService.findAll();
    return response.json(refeicao);
  }
}

export { RefeicaoController };