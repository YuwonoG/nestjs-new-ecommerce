import { IsInt, IsNotEmpty, IsOptional, Max, Min } from "class-validator";
import { GenericDTO } from "./genericDTO";

export class CreateProfileDTO extends GenericDTO{
    
    @IsNotEmpty({message : 'Profile name must be defined'})    
    name : string;

    @Min(3)
    @Max(15)
    @IsInt()    
    maxListing  : number;

    @IsOptional()
    description : string;
}