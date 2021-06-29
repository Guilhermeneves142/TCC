import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDoenca1624669121108 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "doenca",
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
            type: "varchar"
          },
          {
            name: "descricao",
            type: "varchar"
          },
          {
            name: "default",
            type: "bool",
            default: "false"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("doenca");
  }

}
