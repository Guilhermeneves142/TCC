import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Consultorio } from "./Consultorio";

@Entity("nutricionista")
class Nutricionista {
  @PrimaryColumn()
  readonly id: String;
  @JoinColumn({ name: 'id_consultorio' })
  @ManyToOne(() => Consultorio)
  consultorio: Consultorio;
  @Column()
  nome: string;
  @Column()
  cpf: string;
  @Column()
  crn: string;
  @Column()
  email: string;
  @Column()
  celular: string;
  @Column()
  senha: string;
  @Column({name:"inicio_expediente"})
  inicioExpediente: Number;
  @Column({name:"fim_expediente"})
  fimExpediente: Number;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Nutricionista };