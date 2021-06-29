import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateObjetivoPaciente1624668924682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "objetivo_paciente",
          columns: [
          {
            name: "id_objetivo",
            type: "uuid"
          },
          {
            name: "id_paciente",
            type: "uuid"
          },
          ],
          foreignKeys: [
            {
              name: "fk_objetivo_id",
              columnNames: ['id_objetivo'],
              referencedTableName: 'objetivo',
              referencedColumnNames: ['id'],
              onDelete: "SET NULL"
            },
            {
              name: "fk_paciente_id",
              columnNames: ['id_paciente'],
              referencedTableName: 'paciente',
              referencedColumnNames: ['id'],
              onDelete: "SET NULL"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("objetivo_paciente")
    }

}
