
import { UOM } from "src/enum/uom.enum";
import { RecordEntity } from "src/global/entity/record.entity";
import { Column, PrimaryGeneratedColumn, Unique, Entity } from "typeorm";

@Entity()
@Unique(['sku'])
export class Product extends RecordEntity{
    @PrimaryGeneratedColumn("uuid")
    uuid : string;

    @Column({length: 15, nullable: true})
    sku : string;

    @Column({length: 70})
    name : string;

    @Column({length: 3000})
    description : string;   
  
    @Column({length: 150})
    tags : string;

    @Column({type:"numeric", precision : 18, scale: 5})
    weight : number;

    @Column({type: "enum", enum : UOM, default: "gr"})
    uom : string;
}