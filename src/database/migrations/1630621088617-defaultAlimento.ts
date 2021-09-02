import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 as uuid } from "uuid";

export class defaultAlimento1630621088617 implements MigrationInterface {

public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into alimento values (${uuid()},null,'morango',)`);
    
}

public async down(queryRunner: QueryRunner): Promise<void> {
}

}
