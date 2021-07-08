import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Consultorio } from "./Consultorio";
import { Doenca } from "./Doenca";

@Entity("alimento")
class Alimento {
    @PrimaryColumn()
    readonly id: string;
    @JoinColumn({ name: 'id_consultorio' })
    @ManyToOne(() => Consultorio)
    consultorio: Consultorio;
    @ManyToMany(() => Doenca, () => Alimento)
    @JoinTable()
    doencas: Doenca[];
    @Column()
    nome: string;
    @Column()
    proteina: number;
    @Column()
    carboidrato: number;
    @Column()
    lipideos: number;
    @Column()
    energia: number;
    @Column({name:"fibra_alimentar"})
    fibraAlimentar: number;
    @Column({name:"vitamina_c"})
    vitaminaC: number;
    @Column()
    cinzas: number;
    @Column()
    calcio: number;
    @Column()
    magnesio: number;
    @Column()
    manganes: number;
    @Column()
    fosforo: number;
    @Column()
    ferro: number;
    @Column()
    sodio: number;
    @Column()
    potassio: number;
    @Column()
    cobre: number;
    @Column()
    zinco: number;
    @Column()
    tiamina: number;
    @Column()
    riboflavina: number;
    @Column()
    pirodoxina: number;
    @Column()
    niacina: number;
    @Column()
    default: boolean;

    constructor() {
        if(!this.id){
          this.id = uuid();
        }
    }
}

export { Alimento };