
import { RecordEntity } from "src/global/entity/record.entity";
import { Product } from "src/product/product.entity";
import { Profile } from "src/profile/profile.entity";
import { Column, Entity, PrimaryColumn, Unique, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity({name: "User", orderBy : {firstName:"ASC"}})
@Unique(['username', 'email'])
export class User extends RecordEntity{
    @PrimaryColumn()
    uuid : string;

    @Column()
    username : string;

    @Column()
    password : string;
    
    @Column()
    salt : string;

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

    // @Column({type: "int", default: UserStatus.VERIFICATION_REQUIRED})
    // status : UserStatus;

    @OneToMany(()=> Product, product => product.createdByUUID)
    products : Product[];
    
    @OneToOne(()=>Profile, profile => profile.sellerProfile )
    @JoinColumn()
    sellerProfile: Profile;

    @OneToOne(()=>Profile, profile => profile.buyerProfile )
    @JoinColumn()
    buyerProfile: Profile;
}