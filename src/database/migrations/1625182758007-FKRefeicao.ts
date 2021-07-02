import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKRefeicao1625182758007 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey("refeicao",
    
      new TableForeignKey({
        name: "FKConsultorio",
        columnNames: ["id_consultorio"],
        referencedColumnNames: ["id"],
        referencedTableName: "consultorio",
        onDelete: "SET NULL"
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("refeicao", "FKConsultorio");
  }

}
