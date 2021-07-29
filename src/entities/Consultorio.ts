import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Nutricionista } from "./Nutricionista";

@Entity("consultorio")
class Consultorio {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  nome: string;
  @Column()
  telefone: string;
  @Column()
  endereco: string;
  @Column()
  celular: string;
  @OneToMany(() => Nutricionista, nutricionista => nutricionista.consultorio)
  nutricionista: Nutricionista[];

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Consultorio };