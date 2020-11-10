import { IsInt, IsNotEmpty } from "class-validator";
import { GenericDTO as BaseDTO } from "./genericDTO";

export class DeleteProfileDTO extends BaseDTO{
    @IsNotEmpty({message : 'Id should be provided'})    
    @IsInt()
    id : string;
    
}