import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class FKPaciente1625182684153 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("paciente",
    [
      new TableForeignKey({
        name: "FKResponsavel",
        columnNames: ["id_responsavel"],
        referencedColumnNames: ["id"],
        referencedTableName: "responsavel",
        onDelete: "SET NULL"
      }),
      new TableForeignKey({
        name: "FKConsultorio",
        columnNames: ["id_consultorio"],
        referencedColumnNames: ["id"],
        referencedTableName: "consultorio",
        onDelete: "SET NULL"
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("paciente", "FKResponsavel");
    await queryRunner.dropForeignKey("paciente", "FKConsultorio");
  }

}
