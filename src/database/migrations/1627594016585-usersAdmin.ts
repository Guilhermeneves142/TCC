import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 as uuid } from "uuid";
import {hash} from "bcryptjs";

export class usersAdmin1627594016585 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const consultorioId = uuid();
    const nutricionistaId = uuid();
    const passwordHash = await hash('T@1123456',8);
    await queryRunner.query(`insert into consultorio values('${consultorioId}', 'Consultorio Nutrisier', '+18 99176-8804', 'Rua sidney mantovani, 340. Atlântico', '+18 991768804')`)
    await queryRunner.query(`insert into nutricionista values('${nutricionistaId}','${consultorioId}','Guilherme Neves Trindade', '46352984851','4534ld','guilherme_n2010@hotmail.com','+18 991768804','${passwordHash}',now(),now())`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
