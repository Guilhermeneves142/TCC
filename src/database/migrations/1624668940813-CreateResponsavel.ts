import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResponsavel1624668940813 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "responsavel",
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
            name: "cpf",
            type: "varchar",
            isNullable: true
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true
          },
          {
            name: "telefone",
            type: "varchar"
          },
          {
            name: "celular",
            type: "varchar",
            isNullable: true
          },
          {
            name: "endereco",
            type: "varchar",
            isNullable: true
          }
        ]
      }));    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("responsavel")
  }

}
