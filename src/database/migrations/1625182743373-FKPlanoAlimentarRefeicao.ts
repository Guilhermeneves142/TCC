import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKPlanoAlimentarRefeicao1625182743373 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("plano_alimentar_refeicao",
    [
      new TableForeignKey({
        name: "FKRefeicao",
        columnNames: ["id_refeicao"],
        referencedColumnNames: ["id"],
        referencedTableName: "refeicao",
        onDelete: "SET NULL"
      }),
      new TableForeignKey({
        name: "FKPlanoAlimentar",
        columnNames: ["id_plano_alimentar"],
        referencedColumnNames: ["id"],
        referencedTableName: "plano_alimentar",
        onDelete: "SET NULL"
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("plano_alimentar_refeicao", "FKRefeicao");
    await queryRunner.dropForeignKey("plano_alimentar_refeicao", "FKPlanoAlimentar");
  }

}
