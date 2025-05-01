import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    completedName: string;

    @Column()
    CPF: number;

    @Column()
    CNPJ: number;

    @Column()
    phoneNumber: string;
    
    @Column()
    email: string;

    @Column()
    addres: string;

}