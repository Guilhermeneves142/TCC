import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class CreateAntropometrico1624669171457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "antropometrico",
                    columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_alimento",
                        type: "uuid"
                    },
                    {
                        name: "data",
                        type: "timestamp"
                    },
                    {
                        name: "idade",
                        type: "int"
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "altura",
                        type: "int"
                    },
                    {
                        name: "peso",
                        type: "numeric"
                    },
                    {
                        name: "ombro_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "peitoral_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "cintura_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "abdomen_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "quadril_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "panturrilha_d_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "panturrilha_e_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "pescoco_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "punho_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "coxa_d_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "coxa_e_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "braco_d_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "braco_e_circunf",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "antebraco",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "massa gorda",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "massa_magra",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "peso_residual",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "peso_osseo",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "peso_muscular",
                        type: "numeric",
                        isNullable: true
                    }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("antropometrico")
    }

}
