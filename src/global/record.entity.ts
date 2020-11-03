import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class record{
    
    @Column()
    createdByUUID : string;
    
    @CreateDateColumn()
    createdOn : Date;

    @Column()
    updatedByUUID : string;
    
    @UpdateDateColumn()
    updatedOn : Date;
}