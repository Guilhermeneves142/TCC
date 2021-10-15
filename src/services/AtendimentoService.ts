import { getConnection, getCustomRepository } from "typeorm";
import { Atendimento } from "../entities/Atendimento";
import { AtendimentoRepository } from "../repositories/AtendimentoRepository";
import { v4 as uuid } from "uuid";
import { Anamneses } from "../entities/Anamneses";
import { Antropometrico } from "../entities/Antropometrico";

class AtendimentoService {

  async findAll(){
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);

    const atendimento = await atendimentoRepository.find();

    return atendimento;
  }

  async create(atendimento: Atendimento) {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);
    
    const idAtendimento = uuid();

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Atendimento)
    .values([
        { id:idAtendimento, paciente: atendimento.paciente, 
          planoAlimentar: atendimento.planoAlimentar}
     ])
    .execute();
    if(atendimento.anamneses.praticaExercicios){
      const idAnamneses = uuid();

      await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Anamneses)
      .values([
          { atendimento: {id: idAtendimento},id: idAnamneses, ...atendimento.anamneses}
       ])
      .execute();
    }
    if(atendimento.antropometrico.peso){
      const idAntropometrico = uuid();
      await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Antropometrico)
      .values([
          { atendimento: {id: idAtendimento},id: idAntropometrico,...atendimento.antropometrico}
       ])
      .execute();
    }

    return atendimentoRepository.findOne(idAtendimento, {relations: ["planoAlimentar",'anamneses','antropometrico']});
  }

  async findDataToHistoric(idPaciente: string) {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);

    const atendimentos = await atendimentoRepository.find({where: {paciente: {id : idPaciente}},relations: ["anamneses","planoAlimentar","antropometrico","paciente"]});

    return atendimentos;
  }
}

export {AtendimentoService};