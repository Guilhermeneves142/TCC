import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKPatologia1625182831957 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("patologias",
    [
      new TableForeignKey({
        name: "FKAnamneses",
        columnNames: ["id_anamneses"],
        referencedColumnNames: ["id"],
        referencedTableName: "anamneses",
        onDelete: "SET NULL"
      }),
      new TableForeignKey({
        name: "FKDoenca",
        columnNames: ["id_doenca"],
        referencedColumnNames: ["id"],
        referencedTableName: "doenca",
        onDelete: "SET NULL"
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("patologias", "FKAnamneses");
    await queryRunner.dropForeignKey("patologias", "FKDoenca");
  }

}
