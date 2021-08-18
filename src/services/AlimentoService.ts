import { JwtPayload } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { Alimento } from "../entities/Alimento";
import { AlimentoRepository } from "../repositories/AlimentoRepository";
import { AuthenticateService } from "./AuthenticateService";

class AlimentoService {

  async findAll(token: string){

    const authenticateService = new AuthenticateService();
    const clarify = await authenticateService.clarifyToken(token);
    const {consultorio}  = (clarify as JwtPayload);
    const alimentoRepository = getCustomRepository(AlimentoRepository);

    return alimentoRepository.find({where: [{consultorio},{default: true}]});
  }

  async create(alimento: Alimento) {
    const alimentoRepository = getCustomRepository(AlimentoRepository);

    const newAlimento = alimentoRepository.create(alimento);

    await alimentoRepository.save(newAlimento);

    return newAlimento;
  }
}

export {AlimentoService};