import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mark: string;

    @Column()
    model: number;

    @Column()
    year: number;
    
    @Column()
    plate: string;

    @Column()
    chassis: string;

    @Column()
    mileage: number;

}