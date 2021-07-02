import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKAlergiasAlimentares1625182810146 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("alergias_alimentares",
    [
      new TableForeignKey({
        name: "FKAnamneses",
        columnNames: ["id_anamneses"],
        referencedColumnNames: ["id"],
        referencedTableName: "anamneses",
        onDelete: "SET NULL"
      }),
      new TableForeignKey({
        name: "FKAlimento",
        columnNames: ["id_alimento"],
        referencedColumnNames: ["id"],
        referencedTableName: "alimento",
        onDelete: "SET NULL"
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("alergias_alimentares", "FKAnamneses");
    await queryRunner.dropForeignKey("alergias_alimentares", "FKAlimento");
  }

}
