import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { PlanoAlimentar } from "./PlanoAlimentar";
import { Refeicao } from "./Refeicao";
import { v4 as uuid } from "uuid";
import { Alimento } from "./Alimento";

@Entity("plano_alimentar_refeicao")
class PlanoAlimentarRefeicao {
  @PrimaryColumn()
  readonly id: string;
  @JoinColumn({ name: 'id_refeicao' })
  @ManyToOne(() => Refeicao)
  refeicao: Refeicao;
  @JoinColumn({ name: 'id_plano_alimentar' })
  @ManyToOne(() => PlanoAlimentar, planoAlimentar => planoAlimentar.id)
  planoAlimentar: PlanoAlimentar;
  @ManyToMany(() => Alimento)
  @JoinTable({name: "alimento_refeicao", 
  joinColumn: {name: "id_plano_alimentar_refeicao",referencedColumnName: "id"},
   inverseJoinColumn: {name: "id_alimento",referencedColumnName: "id"}})
  alimentos: Alimento[]
  @Column()
  horario: string;
  
  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { PlanoAlimentarRefeicao };