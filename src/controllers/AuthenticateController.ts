import { Request, Response } from "express";
import { AuthenticateService } from "../services/AuthenticateService";


class AuthenticateController {

  async login(request: Request, response: Response){
    const {usuario,senha} = request.body;

    const authenticateService = new AuthenticateService();

    try {   
      const token = await authenticateService.login({usuario,senha})

      return response.json({token})
      }
    catch (error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }
}

export { AuthenticateController }