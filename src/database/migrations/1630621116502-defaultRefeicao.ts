import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 as uuid } from "uuid";

export class defaultRefeicao1630621116502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into refeicao values ('${uuid()}',null,'Café da manhã')`);
        await queryRunner.query(`insert into refeicao values ('${uuid()}',null,'Lanche da manhã')`);
        await queryRunner.query(`insert into refeicao values ('${uuid()}',null,'Almoço')`);
        await queryRunner.query(`insert into refeicao values ('${uuid()}',null,'Lanche da tarde')`);
        await queryRunner.query(`insert into refeicao values ('${uuid()}',null,'Jantar')`);
        await queryRunner.query(`insert into refeicao values ('${uuid()}',null,'Lanche da noite')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
