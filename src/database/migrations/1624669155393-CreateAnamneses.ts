import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnamneses1624669155393 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "anamneses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_atendimento",
            type: "uuid"
          },
          {
            name: "data",
            type: "timestamp"
          },
          {
            name: "alcool",
            type: "varchar"
          },
          {
            name: "tabagismo",
            type: "varchar"
          },
          {
            name: "sono",
            type: "int"
          },
          {
            name: "pratica_exercicios",
            type: "varchar"
          },
          {
            name: "medicamentos",
            type: "varchar"
          },
          {
            name: "apetite",
            type: "varchar"
          },
          {
            name: "mastigação",
            type: "varchar"
          },
          {
            name: "consumo_dagua",
            type: "numeric"
          },
          {
            name: "habito_urinario",
            type: "varchar"
          },
          {
            name: "habito_intestinal",
            type: "varchar"
          },
          {
            name: "observacoes",
            type: "varchar",
            isNullable: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("anamneses");
  }

}
