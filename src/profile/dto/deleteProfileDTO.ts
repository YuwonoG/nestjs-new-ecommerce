import { IsInt, IsNotEmpty } from "class-validator";

export class DeleteProfileDTO{ //} extends GenericDTO{
    @IsNotEmpty({message : 'Id should be provided'})    
    @IsInt()
    id : string;
    
}