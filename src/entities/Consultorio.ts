import {Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("consultorio")
class Consultorio {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  name: string;
  @Column()
  telefone: string;
  @Column()
  endereco: string;
  @Column()
  celular: string;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Consultorio };