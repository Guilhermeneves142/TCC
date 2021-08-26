import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateObjetivo1624668732730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "objetivo",
          columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_consultorio",
            type: "uuid"
          },
          {
            name: "nome",
            type: "varchar"
          },
          {
            name: "descricao",
            type: "varchar"
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
      await queryRunner.dropForeignKey("objetivo","fk_consultorio_id");
      await queryRunner.dropTable("objetivo");
    }

}
