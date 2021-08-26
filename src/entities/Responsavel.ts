import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Consultorio } from "./Consultorio";

@Entity("responsavel")
class Responsavel {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({name: "id_consultorio"})
    @ManyToOne(()=> Consultorio)
    consultorio: Consultorio;
    @Column()
    nome: string;
    @Column()
    cpf: string;
    @Column()
    email: string;
    @Column()
    telefone: string;
    @Column()
    celular: string;
    @Column()
    endereco: string;

    constructor() {
        if(!this.id){
          this.id = uuid();
        }
    }
}

export { Responsavel };