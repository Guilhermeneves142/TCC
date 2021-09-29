import {MigrationInterface, QueryRunner, TableForeignKey, TableUnique} from "typeorm";

export class FKAlimentoRefeicao1625182772914 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("alimento_refeicao",
    [
      new TableForeignKey({
        name: "FKPlanoAlimentarRefeicao",
        columnNames: ["id_plano_alimentar_refeicao"],
        referencedColumnNames: ["id"],
        referencedTableName: "plano_alimentar_refeicao",
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
    await queryRunner.createUniqueConstraint("alimento_refeicao", 
      new TableUnique({
        columnNames: [
          "id_plano_alimentar_refeicao", 
          "id_alimento"
        ],
        name: "Unique_alimento_refeicao"
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("alimento_refeicao", "FKPlanoAlimentarRefeicao");
    await queryRunner.dropForeignKey("alimento_refeicao", "FKAlimento");
  }

}
