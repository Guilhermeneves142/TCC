
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlanoAlimentar1624668955150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "plano_alimentar",
                columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "id_consultorio",
                    type: "uuid"
                },
                {
                    name: "nome",
                    type: "varchar"
                }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("plano_alimentar");
    }

}
