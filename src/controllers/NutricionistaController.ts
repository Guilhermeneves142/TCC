import { Request, Response} from "express";
import { NutricionistaService } from "../services/NutricionistaService";

class NutricionistaController {

  async createNutricionista(request: Request, response: Response) {
    try {
      const nutricionistaService = new NutricionistaService();
      const consultorio = await nutricionistaService.createNutricionista(request.body);
      return response.json(consultorio); 
    } catch (error) {
      return response.status(500).json({
        error:error.message,
        status: 500
      }) 
    }
  }

  async findAll(request: Request, response: Response) {
    const nutricionistaService = new NutricionistaService();

    const consultorio = await nutricionistaService.findAll();
    return response.json(consultorio);
  }
}

export { NutricionistaController };