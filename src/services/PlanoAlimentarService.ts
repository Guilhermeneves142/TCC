import { getCustomRepository, getConnection } from "typeorm";
import { PlanoAlimentar } from "../entities/PlanoAlimentar";
import { PlanoAlimentarRepository } from "../repositories/PlanoAlimentarRepository";
import { v4 as uuid } from "uuid";
import { PlanoAlimentarRefeicao } from "../entities/PlanoAlimentarRefeicao";
import { Consultorio } from "../entities/Consultorio";

class PlanoAlimentarService {

  async findAll(consultorio: string){
    const planoAlimentarRepository = getCustomRepository(PlanoAlimentarRepository);

    const planoAlimentar = await planoAlimentarRepository.find({relations: ["refeicoes"], where: {consultorio: {id: consultorio}}});

    return planoAlimentar;
  }

  async findById(id: string, consultorio: string){
    const planoAlimentarRepository = getCustomRepository(PlanoAlimentarRepository);

    const planoAlimentar = await planoAlimentarRepository.findOne({relations: ["refeicoes"], where: {id, consultorio: {id: consultorio}}});

    return planoAlimentar;
  }

  async save(planoAlimentar: PlanoAlimentar) {
    const planoAlimentarRepository = getCustomRepository(PlanoAlimentarRepository);



    const idPlanoAlimentar = uuid();

     await getConnection()
    .createQueryBuilder()
    .insert()
    .into(PlanoAlimentar)
    .values([
        { consultorio: planoAlimentar.consultorio, nome: planoAlimentar.nome, id: idPlanoAlimentar }
     ])
    .execute();

    const newPlanoAlimentar = await planoAlimentarRepository.findOne({id: idPlanoAlimentar});

    planoAlimentar.refeicoes.forEach(async e => {
      const id = uuid();

      await getConnection()
      .createQueryBuilder()
      .insert()
      .into(PlanoAlimentarRefeicao)
      .values([
          { horario: e.horario, planoAlimentar: newPlanoAlimentar, id, refeicao: e.refeicao}
       ])
      .execute();

      e.alimentos.forEach(async alimento => {
        await getConnection().query(`insert into alimento_refeicao values ('${id}','${alimento.id}')`);
      })
      
    })

    return newPlanoAlimentar;
  }
}

export {PlanoAlimentarService};