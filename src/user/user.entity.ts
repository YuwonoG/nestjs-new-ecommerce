import { UserStatus } from "src/enum/user.enum";
import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryColumn()
    uuid : string;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column({
        nullable : true,
    })
    email : string;

    @Column({
        nullable : true,
    })
    firstName : string;

    @Column({
        nullable : true,
    })
    lastName : string;

    @Column({
        nullable : true,
    })
    pid : string;

    @Column({type: "numeric", default: 5.0})
    sellerRating : number;

    @Column({type: "numeric", default: 5.0})
    buyerRating : number;

    @Column({type: "int", default: UserStatus.VERIFICATION_REQUIRED})
    status : UserStatus;

    @Column()
    createdByUUID : string;
    
    @CreateDateColumn()
    createdOn : Date;

    @Column()
    updatedByUUID : string;
    
    @UpdateDateColumn()
    updatedOn : Date;
}