import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Consultorio } from "./Consultorio";

@Entity("refeicao")
class Refeicao {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({ name: 'id_consultorio' })
    @ManyToOne(() => Consultorio)
    consultorio: Consultorio;
    @Column()
    nome: string;
    @Column()
    default: boolean;

    constructor() {
        if(!this.id){
          this.id = uuid();
        }
    }
}

export { Refeicao };