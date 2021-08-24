import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("responsavel")
class Responsavel {
    @PrimaryColumn()
    readonly id: string;
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