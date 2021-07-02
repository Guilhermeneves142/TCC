
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAlimentoRefeicao1624668995732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "alimento_refeicao",
                    columns: [
                    {
                        name: "id_plano_alimentar_refeicao",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_alimento",
                        type: "uuid",
                        isPrimary: true
                    }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alimento_refeicao");
    }

}
