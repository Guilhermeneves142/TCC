import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePatologia1624669129934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "patologias",
                    columns: [
                    {
                        name: "id_anamneses",
                        type: "uuid"
                    },
                    {
                        name: "id_doenca",
                        type: "uuid"
                    }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("patologias")
    }

}
