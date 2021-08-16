import { Request, Response} from "express";
import { RefeicaoService } from "../services/RefeicaoService";

class RefeicaoController {

  async findAll(request: Request, response: Response) {
    const refeicaoService = new RefeicaoService();

    const refeicao = await refeicaoService.findAll();
    return response.json(refeicao);
  }

  async createRefeicao(request: Request, response: Response) {
    try {
      const refeicaoService = new RefeicaoService();
      const refeicao = await refeicaoService.createRefeicao(request.body);
      return response.json(refeicao); 
    } catch (error) {
      return response.status(500).json({
        error:error.message,
        status: 500
      }) 
    }
  }
}

export { RefeicaoController };