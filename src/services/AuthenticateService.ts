import { getCustomRepository } from "typeorm"
import { NutricionistaRepository } from "../repositories/NutricionistaRepository"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  cpf: string;
  email: string;
  senha: string;
}

class AuthenticateService {

  async login(login: IAuthenticateRequest){
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);
    
    //verify email or cpf exists
    let nutricionista;
    if(login.cpf)
    nutricionista = await nutricionistaRepository.findOne({cpf:login.cpf});
    else if(login.email)
    nutricionista = await nutricionistaRepository.findOne({email:login.email});
    else throw Error("email or cpf incorrect");

    const passwordMatch = await compare(login.senha,nutricionista.senha);

    if (!passwordMatch) throw Error("email or cpf incorrect");

    const token = sign(
      {
        consultorio: nutricionista.consultorio?.nome ?? null
      }, 
        "69a80d081c6b251a81dab43a2bae95ee", 
      {
        expiresIn: "1d",
        subject: nutricionista.id.toString()
      }
    )
    return token;
  }
}

export { AuthenticateService }