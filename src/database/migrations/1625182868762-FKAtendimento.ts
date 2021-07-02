import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class FKAtendimento1625182868762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKeys("atendimento",
        [
            new TableForeignKey({
                name: "FKPaciente",
                columnNames: ["id_paciente"],
                referencedColumnNames: ["id"],
                referencedTableName: "paciente",
                onDelete: "SET NULL"
            }),
            new TableForeignKey({
                name: "FKPlanoAlimentar",
                columnNames: ["id_plano_alimentar"],
                referencedColumnNames: ["id"],
                referencedTableName: "plano_alimentar",
                onDelete: "SET NULL"
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("atendimento", "FKPaciente");
        await queryRunner.dropForeignKey("atendimento", "FKPlanoAlimentar");
    }

}
