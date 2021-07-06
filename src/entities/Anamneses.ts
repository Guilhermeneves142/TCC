import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Atendimento } from "./Atendimento";

@Entity("anamneses")
class Anamneses {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_atendimento' })
  @ManyToOne(() => null)
  atendimento: Atendimento;
  @Column()
  data: Date;
  @Column()
  alcool: string;
  @Column()
  tabagismo: string;
  @Column()
  sono: number;
  @Column({name:"pratica_exercicios"})
  praticaExercicios: string;
  @Column()
  medicamentos: string;
  @Column()
  apetite: string;
  @Column()
  mastigacao: string;
  @Column({name:"consumo_dagua"})
  consumoDagua: number;
  @Column({name:"habito_urinario"})
  habitoUrinario: string;
  @Column({name:"habito_intestinal"})
  habitoIntestinal: string;
  @Column()
  observacoes:string;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Anamneses };