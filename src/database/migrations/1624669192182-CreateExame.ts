import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExame1624669192182 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "exame",
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
            name: "name",
            type: "varchar"
          },
          {
            name: "foto",
            type: "varchar"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("exame");
  }

}
