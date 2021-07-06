import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Atendimento } from "./Atendimento";

@Entity("exame")
class Exame {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_atendimento' })
  @ManyToOne(() => null)
  atendimento: Atendimento;
  @Column()
  nome: string;
  @Column()
  foto: string;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Exame };