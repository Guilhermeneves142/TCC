import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAlimentoRestrito1624669027468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "alimento_restrito",
                    columns: [
                    {
                        name: "id_doenca",
                        type: "uuid"
                    },
                    {
                        name: "id_alimento",
                        type: "uuid"
                    }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alimento_restrito");
    }

}
