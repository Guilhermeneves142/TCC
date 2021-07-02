import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKDoenca1625182821350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("doenca",
            new TableForeignKey({
                name: "FKConsultorio",
                columnNames: ["id_consultorio"],
                referencedColumnNames: ["id"],
                referencedTableName: "consultorio",
                onDelete: "SET NULL"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("doenca", "FKConsultorio");
    }

}
