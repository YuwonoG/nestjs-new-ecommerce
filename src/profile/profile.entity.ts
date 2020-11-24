import { RecordEntity } from "src/global/entity/record.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "Profile" , orderBy:{name: "ASC"}})
export class Profile extends RecordEntity{
    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column({nullable : false})
    name : string;

    @Column({type: "int"})
    maxListing : number;

    @Column({nullable : true})
    description : string;

     @OneToOne(()=> User, user => user.sellerProfile)     
     sellerProfile: User;

     @OneToOne(()=> User, user => user.buyerProfile)     
     buyerProfile: User;
}