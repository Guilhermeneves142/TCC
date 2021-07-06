import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Consultorio } from "./Consultorio";

@Entity("doenca")
class Doenca {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({ name: 'id_consultorio' })
    @ManyToOne(() => Consultorio)
    consultorio: Consultorio;
    @Column()
    nome: string;
    @Column()
    descricao: string;
    @Column()
    default: boolean;

    constructor() {
        if(!this.id){
          this.id = uuid();
        }
    }
}

export { Doenca };