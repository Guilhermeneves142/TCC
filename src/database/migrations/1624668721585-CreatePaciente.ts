import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaciente1624668721585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "paciente",
          columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_responsavel",
            type: "uuid",
            isNullable: true
          },
          {
            name: "id_consultorio",
            type: "uuid",
            isNullable: false
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true
          },
          {
            name: "telefone",
            type: "varchar",
            isNullable: true
          },
          {
            name: "celular",
            type: "varchar",
            isNullable: true
          },
          {
            name: "data_nascimento",
            type: "timestamp",
            isNullable: false
          },
          {
            name: "genero",
            type: "char",
            isNullable: true
          }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("paciente");
    }

}
