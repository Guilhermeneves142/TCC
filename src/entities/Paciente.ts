import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Antropometrico } from "./Antropometrico";
import { Consultorio } from "./Consultorio";
import { Objetivo } from "./Objetivo";
import { Responsavel } from "./Responsavel";

@Entity("paciente")
class Paciente {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({ name: 'id_consultorio' })
    @ManyToOne(() => Consultorio)
    consultorio: Consultorio;
    @JoinColumn({ name: 'id_responsavel' })
    @ManyToOne(() => Responsavel)
    responsavel: Responsavel;
    @OneToOne(() => Antropometrico, () => Paciente)
    antropometrico: Antropometrico
    @ManyToMany(() => Objetivo)
    @JoinTable()
    objetivos: Objetivo[];
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