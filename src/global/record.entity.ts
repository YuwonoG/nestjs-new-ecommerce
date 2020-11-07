import { RecordStatus } from "src/enum/record.enum";
import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class RecordEntity extends BaseEntity{
    
    @Column({type:"integer", default: RecordStatus.DRAFT})
    status : RecordStatus;

    @Column()
    createdByUUID : string;
    
    @CreateDateColumn()
    createdOn : Date;

    @Column()
    updatedByUUID : string;
    
    @UpdateDateColumn()
    updatedOn : Date;
}