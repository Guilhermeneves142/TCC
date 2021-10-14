import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Anamneses } from "./Anamneses";
import { Antropometrico } from "./Antropometrico";
import { Paciente } from "./Paciente";
import { PlanoAlimentar } from "./PlanoAlimentar";

@Entity("atendimento")
class Atendimento {
  @PrimaryColumn()
  readonly id: string;
  @OneToOne(() => Anamneses, anamneses => anamneses.atendimento)
  anamneses: Anamneses;
  @OneToOne(() => Antropometrico, antropometrico => antropometrico.atendimento)
  antropometrico: Antropometrico;
  @JoinColumn({ name: 'id_paciente' })
  @ManyToOne(() => Paciente, paciente => paciente.atendimento)
  paciente: Paciente;
  @JoinColumn({ name: 'id_plano_alimentar' })
  @ManyToOne(() => PlanoAlimentar)
  planoAlimentar: PlanoAlimentar;
  @Column({name:"data_atendimento"})
  dataAtendimento: string;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Atendimento };