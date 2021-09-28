import { Request, Response} from "express";
import { PlanoAlimentarService } from "../services/PlanoAlimentarService";

class PlanoAlimentarController {

  async findAll(request: Request, response: Response) {
    try {
      const planoAlimentarService = new PlanoAlimentarService();

      const planoAlimentar = await planoAlimentarService.findAll(request.info.consultorio.id);
      return response.json(planoAlimentar);
    } catch (error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const idPlanoAlimentar = request.params.idPlanoAlimentar;
      const planoAlimentarService = new PlanoAlimentarService();

      const planoAlimentar = await planoAlimentarService.findById(idPlanoAlimentar,request.info.consultorio.id);
      return response.json(planoAlimentar);
    } catch (error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

  async save(request: Request, response: Response) {
    // try {
    const planoAlimentarService = new PlanoAlimentarService();
    const planoAlimentar = await planoAlimentarService.save(request.body);
    return response.json(planoAlimentar);
    // }
    // catch (error)  {
    //   return response.status(500).json({
    //     error: "internal server error",
    //     status: 500
    //   }) 
    // }
  }
}

export { PlanoAlimentarController };