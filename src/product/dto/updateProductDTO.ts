import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";


// import { GenericDTO } from "../../global/class/genericDTO";

export class UpdateProductDTO{
    @IsNotEmpty({message : 'Product id must be provided'})
    uuid : string;

    sku: string;

    @IsNotEmpty({message : 'Product name must be defined'})    
    name : string;


    @IsOptional()
    description : string;


  
    @IsOptional()
    tags : string;

    @IsNumber({ allowNaN: false, allowInfinity : false})
    weight : number;
}