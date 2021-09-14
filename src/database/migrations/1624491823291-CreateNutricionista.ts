import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateNutricionista1624491823291 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "nutricionista",
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
          isNullable: false
        },
        {
          name: "cpf",
          type: "varchar",
          isNullable: false
        },
        {
          name: "crn",
          type: "varchar",
          isNullable: false
        },
        {
          name: "email",
          type: "varchar" 
        },
        {
          name: "celular",
          type: "varchar"
        },
        {
          name: "senha",
          type: "varchar",
          isNullable: false
        },
        {
          name: "inicio_expediente",
          type: "varchar",
          isNullable: true
        },
        {
          name: "fim_expediente",
          type: "varchar",
          isNullable: true
        }
        ],
        foreignKeys: [
          {
            name: "fk_consultorio_id",
            columnNames: ['id_consultorio'],
            referencedTableName: 'consultorio',
            referencedColumnNames: ['id'],
            onDelete: "SET NULL"
          }
        ]
      })
    )   
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("nutricionista");
  }
}
