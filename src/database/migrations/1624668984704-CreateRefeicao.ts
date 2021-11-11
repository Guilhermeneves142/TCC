import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRefeicao1624668984704 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "refeicao",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_consultorio",
            type: "uuid",
            isNullable: true
          },
          {
            name: "nome",
            type: "varchar",
            isUnique: true
          },
          {
            name: "default",
            type: "bool",
            default: "false"
          }
        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("refeicao");
  }

}
