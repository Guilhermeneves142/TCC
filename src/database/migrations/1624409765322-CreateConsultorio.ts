import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConsultorio1624409765322 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "consultorio",
          columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false
          },
          {
            name: "telefone",
            type: "varchar",
            isNullable: false
          },
          {
            name: "endereco",
            type: "varchar",
            isNullable: false
          },
          {
            name: "celular",
            type: "varchar",
            isNullable: true
          }
          ]
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("consultorio");
  }

}
