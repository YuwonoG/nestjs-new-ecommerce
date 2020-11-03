
import { ProductStatus } from "src/enum/product.enum";
import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Product extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    uuid : string;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    pid : string;

    @Column({type: "numeric"})
    price : number;

    @Column({type:"enum", default: ProductStatus.DRAFT})
    status : ProductStatus;
    
    @CreateDateColumn()
    createdOn : Date;

    @UpdateDateColumn()
    updatedOn : Date;

    
}