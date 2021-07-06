import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Paciente } from "./Paciente";
import { PlanoAlimentar } from "./PlanoAlimentar";

@Entity("atendimento")
class Atendimento {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_paciente' })
  @ManyToOne(() => null)
  paciente: Paciente;
  @JoinColumn({ name: 'id_plano_alimentar' })
  @ManyToOne(() => null)
  planoAlimentar: PlanoAlimentar;
  @Column({name:"data_atendimento"})
  dataAtendimento: Date;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Atendimento };