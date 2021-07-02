import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKPlanoAlimentar1625182728495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("plano_alimentar",
            new TableForeignKey({
                name: "FKConsultorio",
                columnNames: ["id_consultorio"],
                referencedColumnNames: ["id"],
                referencedTableName: "consultorio",
                onDelete: "SET NULL"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("plano_alimentar", "FKConsultorio");
    }

}
