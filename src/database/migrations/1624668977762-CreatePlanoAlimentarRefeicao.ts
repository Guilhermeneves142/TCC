import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlanoAlimentarRefeicao1624668977762 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "plano_alimentar_refeicao",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_refeicao",
            type: "uuid"
          },
          {
            name: "id_plano_alimentar",
            type: "uuid"
          },
          {
            name: "horario",
            type: "timestamp"
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("plano_alimentar_refeicao");
  }

}
