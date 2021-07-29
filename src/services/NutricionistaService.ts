import { getCustomRepository } from "typeorm";
import { Consultorio } from "../entities/Consultorio";
import { NutricionistaRepository } from "../repositories/NutricionistaRepository";
import {hash} from "bcryptjs";
import { Nutricionista } from "../entities/Nutricionista";
import { ConsultorioRepository } from "../repositories/ConsultorioRepository";

class NutricionistaService {

  async createNutricionista(nutricionista: Nutricionista){
    
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);


    if(!nutricionista.cpf || !nutricionista.crn || !nutricionista.nome || !nutricionista.senha)
      throw new Error("Campos obrigatórios estão vázios");

    const nutricionistaAlreadyExists = await nutricionistaRepository.findOne({cpf:nutricionista.cpf});

    if(nutricionistaAlreadyExists)
      throw new Error("Já existe um nutricionista cadastrado com esses dados");

    const passwordHash = await hash(nutricionista.senha,8);

    nutricionista.senha = passwordHash;

    const newNutricionista = nutricionistaRepository.create(nutricionista);

    await nutricionistaRepository.save(newNutricionista);

    return newNutricionista;
  }

  async setConsultorio(idNutricionista: string, idConsultorio: string){
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);
    const consultorioRepository = getCustomRepository(ConsultorioRepository);
    const nutricionista = await nutricionistaRepository.findOne(idNutricionista);
    const consultorio = await consultorioRepository.findOne(idConsultorio);

    nutricionista.consultorio = consultorio;
    
    const updateNutricionista = nutricionistaRepository.create(nutricionista);
    await nutricionistaRepository.save(updateNutricionista);

    return updateNutricionista;
  }

  async findAll(){
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);

    const nutricionistas = await nutricionistaRepository.createQueryBuilder("nutricionista").leftJoinAndSelect("nutricionista.consultorio", "consultorio")
    .getMany();
    return nutricionistas;
  }
}

export {NutricionistaService};
