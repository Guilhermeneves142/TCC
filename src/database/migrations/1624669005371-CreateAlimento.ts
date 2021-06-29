import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAlimento1624669005371 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alimento",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "id_consultorio",
            type: "uuid",
            isNullable: true
          },
          {
            name: "nome",
            type: "varchar"
          },
          {
            name: "proteina",
            type: "numeric",
            isNullable: true
          },
          {
            name: "carboidrato",
            type: "numeric",
            isNullable: true
          },
          {
            name: "lipideos",
            type: "numeric",
            isNullable: true
          },
          {
            name: "energia",
            type: "numeric",
            isNullable: true
          },          
          {
            name: "fibra_alimentar",
            type: "numeric",
            isNullable: true
          },
          {
            name: "vitamina_c",
            type: "numeric",
            isNullable: true
          },
          {
            name: "cinzas",
            type: "numeric",
            isNullable: true
          },          
          {
            name: "calcio",
            type: "numeric",
            isNullable: true
          },
          {
            name: "magnesio",
            type: "numeric",
            isNullable: true
          },
          {
            name: "manganes",
            type: "numeric",
            isNullable: true
          },
          {
            name: "fosforo",
            type: "numeric",
            isNullable: true
          },
          {
            name: "ferro",
            type: "numeric",
            isNullable: true
          },
          {
            name: "sodio",
            type: "numeric",
            isNullable: true
          },
          {
            name: "potassio",
            type: "numeric",
            isNullable: true
          },
          {
            name: "cobre",
            type: "numeric",
            isNullable: true
          },
          {
            name: "zinco",
            type: "numeric",
            isNullable: true
          },
          {
            name: "tiamina",
            type: "numeric",
            isNullable: true
          },
          {
            name: "riboflavina",
            type: "numeric",
            isNullable: true
          },
          {
            name: "pirodoxina",
            type: "numeric",
            isNullable: true
          },
          {
            name: "niacina",
            type: "numeric",
            isNullable: true
          },
          {
            name: "default",
            type: "bool",
            default: "true"
          }
        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alimento");
  }

}
