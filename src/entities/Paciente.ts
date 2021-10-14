import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Antropometrico } from "./Antropometrico";
import { Atendimento } from "./Atendimento";
import { Consultorio } from "./Consultorio";
import { Doenca } from "./Doenca";
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
    @ManyToMany(() => Doenca, doenca => doenca.id)
    @JoinTable({name: "patologias", 
    joinColumn: {name: "id_paciente",referencedColumnName: "id"},
     inverseJoinColumn: {name: "id_doenca",referencedColumnName: "id"}})
    doencas: Doenca[];
    @OneToOne(() => Antropometrico, () => Paciente)
    antropometrico: Antropometrico
    @ManyToMany(() => Objetivo, objetivo => objetivo.id)
    @JoinTable({name: "objetivo_paciente", 
    joinColumn: {name: "id_paciente",referencedColumnName: "id"},
     inverseJoinColumn: {name: "id_objetivo",referencedColumnName: "id"}})
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
    @OneToMany(() => Atendimento, atendimento => atendimento.paciente)
    atendimento: Atendimento[];

    constructor() {
        if(!this.id){
          this.id = uuid();
        }
      }
}

export { Paciente };