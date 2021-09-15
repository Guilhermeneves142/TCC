import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 as uuid } from "uuid";

export class defaultObjetivo1631577898763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into objetivo values ('${uuid()}',null,'Emagrecer','Dieta focada na perda de peso')`);
        await queryRunner.query(`insert into objetivo values ('${uuid()}',null,'Engordar','Dieta focada no ganho de peso')`);
        await queryRunner.query(`insert into objetivo values ('${uuid()}',null,'Hipertrofia','Dieta focada no consumo de proteínas')`);
        await queryRunner.query(`insert into objetivo values ('${uuid()}',null,'Ganho de massa','Dieta focada no ganho de massa muscular')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
