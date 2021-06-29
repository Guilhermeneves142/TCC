import { Request, Response } from "express";
import { AuthenticateService } from "../services/AuthenticateService";


class AuthenticateController {

  async login(request: Request, response: Response){
    const {email,cpf,senha} = request.body;

    const authenticateService = new AuthenticateService();

    const token = await authenticateService.login({email,cpf,senha})

    return response.json({token})
  }
}

export { AuthenticateController }