import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Consultorio } from "./Consultorio";
import { Responsavel } from "./Responsavel";

@Entity("paciente")
class Paciente {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({ name: 'id_consultorio' })
    @ManyToOne(() => null)
    responsavel: Responsavel;
    @JoinColumn({ name: 'id_responsavel' })
    @ManyToOne(() => null)
    consultorio: Consultorio;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    telefone: string;
    @Column()
    celular: string;
    @Column({name:"data_nascimento"})
    dataNascimento: Date;
    @Column()
    genero: string;

    constructor() {
        if(!this.id){
          this.id = uuid();
        }
      }
}

export { Paciente };