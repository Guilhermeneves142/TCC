import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Consultorio } from "./Consultorio";
import { Refeicao } from "./Refeicao";
import { v4 as uuid } from "uuid";

@Entity("plano_alimentar")
class PlanoAlimentar {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_consultorio' })
  @ManyToOne(() => Consultorio)
  consultorio: Consultorio;
  @Column()
  nome: string;
  
  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { PlanoAlimentar };