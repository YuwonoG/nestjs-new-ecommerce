import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";


// import { GenericDTO } from "../../global/class/genericDTO";

export class CreateProductDTO{

    sku: string;

    @IsNotEmpty({message : 'Name must be defined'})    
    name : string;


    @IsOptional()
    description : string;


  
    @IsOptional()
    tags : string;

    @IsNumber({ allowNaN: false, allowInfinity : false})
    weight : number;
}