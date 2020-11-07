import { RecordEntity } from "src/global/record.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile extends RecordEntity{
    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column({nullable : false})
    name : string;

    @Column({type: "int"})
    maxListing : number;

    @Column({nullable : true})
    description : string;


}