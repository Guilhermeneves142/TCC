import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKAlimentoRestrito1625182797591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKeys("alimento_restrito",
        [
            new TableForeignKey({
                name: "FKDoenca",
                columnNames: ["id_doenca"],
                referencedColumnNames: ["id"],
                referencedTableName: "doenca",
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
        await queryRunner.dropForeignKey("alimento_restrito", "FKDoenca");
        await queryRunner.dropForeignKey("alimento_restrito", "FKAlimento");
    }

}
