import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKAlimento1625182785739 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey("alimento",
    
      new TableForeignKey({
        name: "FKConsultorio",
        columnNames: ["id_consultorio"],
        referencedColumnNames: ["id"],
        referencedTableName: "consultorio",
        onDelete: "SET NULL"
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("alimento", "FKConsultorio");
  }

}
