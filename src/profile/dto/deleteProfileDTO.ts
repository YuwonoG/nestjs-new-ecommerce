import { IsInt, IsNotEmpty } from "class-validator";
import { GenericDTO } from "./genericDTO";

export class DeleteProfileDTO extends GenericDTO{
    @IsNotEmpty({message : 'Id should be provided'})    
    @IsInt()
    id : string;
    
}