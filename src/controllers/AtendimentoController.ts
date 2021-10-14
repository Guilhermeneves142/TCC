import { Request, Response} from "express";
import { AtendimentoService } from "../services/AtendimentoService";

class AtendimentoController {

  async findAll(request: Request, response: Response) {
    const atendimentoService = new AtendimentoService();

    const atendimento = await atendimentoService.findAll();
    return response.json(atendimento);
  }

  async create(request: Request, response: Response) {
    // try {
      const atendimentoService = new AtendimentoService();
      const atendimento = await atendimentoService.create(request.body);
      return response.json(atendimento); 
    // } catch (error) {
    //   return response.status(500).json({
    //     error:error.message,
    //     status: 500
    //   }) 
    // }
  }
}

export { AtendimentoController };