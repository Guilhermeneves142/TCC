import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKExame1625182878638 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /* Teste */
        await queryRunner.createForeignKey("exame",
            new TableForeignKey({
                name: "FKAtendimento",
                columnNames: ["id_atendimento"],
                referencedColumnNames: ["id"],
                referencedTableName: "atendimento",
                onDelete: "SET NULL"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("exame", "FKAtendimento");
    }

}