import { Request, Response} from "express";
import { ObjetivoService } from "../services/ObjetivoService";

class ObjetivoController {

  async findAll(request: Request, response: Response) {
    const objetivoService = new ObjetivoService();

    let objetivo = await objetivoService.findAll();

    return response.json(objetivo);
  }

  async createObjetivo(request:Request, response: Response) {
    try {
      const objetivoService = new ObjetivoService();

      const objetivo = await objetivoService.create(request.body);  

      return response.json(objetivo)
    } catch (error) {
      return response.status(500).json({
        error:error.message,
        status: 500
      }) 
    }
    
  }

  async findById(request:Request, response: Response){
    try {
      const idObjetivo = request.params.idObjetivo;
      const objetivoService = new ObjetivoService();

      const objetivo = await objetivoService.findById(idObjetivo);

      return response.json(objetivo)
    } catch (error) {
      return response.status(500).json({
        error:error.message,
        status: 500
      }) 
    }
  }
}

export { ObjetivoController };