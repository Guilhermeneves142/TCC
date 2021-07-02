import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKAnamneses1625182845695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("anamneses",
            new TableForeignKey({
                name: "FKAtendimento",
                columnNames: ["id_atendimento"],
                referencedColumnNames: ["id"],
                referencedTableName: "atendimento",
                onDelete: "SET NULL"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("anamneses", "FKAtendimento");
    }

}
