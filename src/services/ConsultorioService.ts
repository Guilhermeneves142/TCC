import { getCustomRepository } from "typeorm";
import { ConsultorioRepository } from "../repositories/ConsultorioRepository";
import { NutricionistaRepository } from "../repositories/NutricionistaRepository";

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

  async bindNutricionistaWithConsultorio(idNutricionista, idConsultorio) {
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);
    const consultorioRepository = getCustomRepository(ConsultorioRepository);

    var nutricionista = await nutricionistaRepository.findOne(idNutricionista);
    var consultorio = await consultorioRepository.findOne(idConsultorio);
    nutricionista.consultorio = consultorio;

    var nutricionistaWithConsultorio = nutricionistaRepository.create(nutricionista);
    nutricionistaRepository.save(nutricionistaWithConsultorio);

    return nutricionistaWithConsultorio;
  }
}

export {ConsultorioService};