import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAtendimento1624669185647 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "atendimento",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_paciente",
            type: "uuid"
          },
          {
            name: "id_plano_alimentar",
            type: "uuid"
          },
          {
            name: "data_atendimento",
            type: "varchar",
            default: "cast(now() as varchar)"
          },
          {
            name: "createdOn",
            type: "timeStamp",
            default: "now()"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("atendimento");
  }

}
