import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Consultorio } from "./Consultorio";
import { PlanoAlimentarRefeicao } from "./PlanoAlimentarRefeicao"
import { v4 as uuid } from "uuid";

@Entity("plano_alimentar")
class PlanoAlimentar {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'id_consultorio' })
  @ManyToOne(() => Consultorio)
  consultorio: Consultorio;

  @Column()
  nome: string;
  
  @OneToMany(() => PlanoAlimentarRefeicao, planoAlimentarRefeicao => planoAlimentarRefeicao.planoAlimentar)
  @JoinColumn({name: "id_plano_alimentar",referencedColumnName: "id_plano_alimentar"})
  refeicoes: PlanoAlimentarRefeicao[];
  
  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { PlanoAlimentar };