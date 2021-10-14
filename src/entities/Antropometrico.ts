import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Atendimento } from "./Atendimento";
import { Paciente } from "./Paciente";

@Entity("antropometrico")
class Antropometrico {
  @PrimaryColumn()
  readonly id: string;
  @OneToOne(() => Atendimento)
  @JoinColumn({name: "id_atendimento"})
  atendimento: Atendimento;
  @Column()
  data: string;
  @Column()
  idade: number;
  @Column()
  descricao: string;
  @Column()
  altura: number;
  @Column()
  peso: number;
  @Column({name: "ombro_circunf"})
  ombroCircunferencia: number;
  @Column({name: "peitoral_circunf"})
  peitoralCircunferencia: number;
  @Column({name: "cintura_circunf"})
  cinturaCircunferencia: number;
  @Column({name: "abdomen_circunf"})
  abdomenCircunferencia: number;
  @Column({name: "quadril_circunf"})
  quadrilCircunferencia: number;
  @Column({name: "panturrilha_d_circunf"})
  panturrilhaDireitaCircunferencia: number;
  @Column({name: "panturrilha_e_circunf"})
  panturrilhaEsquerdaCircunferencia: number;
  @Column({name: "pescoco_circunf"})
  pescocoCircunferencia: number;
  @Column({name: "punho_circunf"})
  punhoCircunferencia: number;
  @Column({name: "coxa_d_circunf"})
  coxaDireitaCircunferencia: number;
  @Column({name: "coxa_e_circunf"})
  coxaEsquerdaCircunferencia: number;
  @Column({name: "braco_d_circunf"})
  bracoDireitoCircunferencia: number;
  @Column({name: "braco_e_circunf"})
  bracoEsquerdoCircunferencia: number;
  @Column({name: "antebraco"})
  antebraco: number;
  @Column({name: "massa_gorda"})
  massaGorda: number;
  @Column({name: "massa_magra"})
  massaMagra: number;
  @Column({name: "peso_residual"})
  pesoResidual: number;
  @Column({name: "peso_osseo"})
  pesoOsseo: number;
  @Column({name: "peso_muscular"})
  pesoMuscula: number;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Antropometrico };