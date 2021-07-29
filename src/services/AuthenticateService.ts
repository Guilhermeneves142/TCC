import { getCustomRepository } from "typeorm"
import { NutricionistaRepository } from "../repositories/NutricionistaRepository"
import { compare } from "bcryptjs";
import { sign, decode } from "jsonwebtoken";

interface IAuthenticateRequest {
  usuario: string;
  senha: string;
}

class AuthenticateService {

  async login(login: IAuthenticateRequest){
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);
    
    //verify email or cpf exists
    let nutricionista = await nutricionistaRepository.findOne({cpf:login.usuario},{relations: ["consultorio"]});
    if (!nutricionista)
    nutricionista = await nutricionistaRepository.findOne({email:login.usuario},{relations: ["consultorio"]});
    if(!nutricionista)
    throw Error("email or cpf incorrect");

    const passwordMatch = await compare(login.senha,nutricionista.senha);

    if (!passwordMatch) throw Error("email or cpf incorrect");

    const token = sign(
      {
        consultorio: nutricionista.consultorio ?? null,
        nome: nutricionista.nome
      }, 
        "69a80d081c6b251a81dab43a2bae95ee", 
      {
        expiresIn: "1d",
        subject: nutricionista.id.toString()
      }
    )
    return {token , hasConsultorio: !!nutricionista.consultorio} ;
  }

  async clarifyToken(token: string) {
    return decode(token);
  }
}

export { AuthenticateService }