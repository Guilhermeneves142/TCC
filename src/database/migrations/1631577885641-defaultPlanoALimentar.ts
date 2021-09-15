import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 as uuid } from "uuid";

export class defaultPlanoALimentar1631577885641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into plano_alimentar values ('${uuid()}',null,'Low Carb 1')`);
        await queryRunner.query(`insert into plano_alimentar values ('${uuid()}',null,'Low Carb 2')`);
        await queryRunner.query(`insert into plano_alimentar values ('${uuid()}',null,'Low Carb 3')`);
        await queryRunner.query(`insert into plano_alimentar values ('${uuid()}',null,'Hiperproteíca')`);
        await queryRunner.query(`insert into plano_alimentar values ('${uuid()}',null,'Hipercalórica')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
