import { getCustomRepository } from "typeorm";
import { ConsultorioRepository } from "../repositories/ConsultorioRepository";

interface IUserRequest {
  nome: string;
  telefone: string;
  endereco: string;
  celular?: string;
}

class ConsultorioService {

  async createConsultorio({nome, telefone, endereco, celular}: IUserRequest){
    
    const consultorioRepository = getCustomRepository(ConsultorioRepository);


    if(!nome || !telefone)
      throw new Error("name or phone incorrect");

    const consultorioAlreadyExists = await consultorioRepository.findOne({nome,telefone});

    if(consultorioAlreadyExists)
      throw new Error("Consultorio already exists");
    
    const consultorio = consultorioRepository.create({nome, telefone, endereco, celular});

    await consultorioRepository.save(consultorio);

    return consultorio;
  }

  async findAll(){
    const consultorioRepository = getCustomRepository(ConsultorioRepository);

    const consultorios = await consultorioRepository.find();

    return consultorios;
  }
}

export {ConsultorioService};