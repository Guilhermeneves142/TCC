import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKAntroprometrico1625182857428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("antropometrico",
            new TableForeignKey({
                name: "FKAlimento",
                columnNames: ["id_alimento"],
                referencedColumnNames: ["id"],
                referencedTableName: "alimento",
                onDelete: "SET NULL"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("antropometrico", "FKAlimento");
    }

}
