import { getCustomRepository } from "typeorm";
import { Consultorio } from "../entities/Consultorio";
import { NutricionistaRepository } from "../repositories/NutricionistaRepository";
import {hash} from "bcryptjs";
import { Nutricionista } from "../entities/Nutricionista";

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

  async findAll(){
    const nutricionistaRepository = getCustomRepository(NutricionistaRepository);

    const nutricionistas = await nutricionistaRepository.find();

    return nutricionistas;
  }
}

export {NutricionistaService};