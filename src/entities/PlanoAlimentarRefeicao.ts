import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { PlanoAlimentar } from "./PlanoAlimentar";
import { Refeicao } from "./Refeicao";
import { v4 as uuid } from "uuid";

@Entity("plano_alimentar_refeicao")
class PlanoAlimentarRefeicao {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_refeicao' })
  @OneToOne(() => Refeicao)
  refeicao: Refeicao;
  @JoinColumn({ name: 'id_plano_alimentar' })
  @OneToOne(() => PlanoAlimentar)
  planoAlimentar: PlanoAlimentar;
  @Column()
  horario: Date;
  
  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { PlanoAlimentar };