import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Anamneses } from "./Anamneses";
import { Paciente } from "./Paciente";
import { PlanoAlimentar } from "./PlanoAlimentar";

@Entity("atendimento")
class Atendimento {
  @PrimaryColumn()
  readonly id: string;
  @OneToOne(() => Anamneses, () => Atendimento)
  anamneses: Anamneses
  @JoinColumn({ name: 'id_paciente' })
  @ManyToOne(() => Paciente)
  paciente: Paciente;
  @JoinColumn({ name: 'id_plano_alimentar' })
  @ManyToOne(() => PlanoAlimentar)
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