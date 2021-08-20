import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Alimento } from "./Alimento";
import { Consultorio } from "./Consultorio";

@Entity("doenca")
class Doenca {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({ name: 'id_consultorio' })
    @ManyToOne(() => Consultorio)
    consultorio: Consultorio;
    @ManyToMany(() => Alimento, alimento => alimento.id)
    @JoinTable({name: "alimento_restrito", 
    joinColumn: {name: "id_doenca",referencedColumnName: "id"},
     inverseJoinColumn: {name: "id_alimento",referencedColumnName: "id"}})
    alimentos: Alimento[];
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