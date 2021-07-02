import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAlergiasAlimentares1624669112119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "alergias_alimentares",
                    columns: [
                    {
                        name: "id_anamneses",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_alimento",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alergias_alimentares")
    }

}
