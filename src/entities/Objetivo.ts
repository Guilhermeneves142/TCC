import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Consultorio } from "./Consultorio";
import { v4 as uuid } from "uuid";

@Entity("objetivo")
class Objetivo {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_consultorio' })
  @ManyToOne(() => Consultorio)
  consultorio: Consultorio;
  @Column()
  nome: string;
  @Column()
  descricao: string;
  
  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Objetivo };