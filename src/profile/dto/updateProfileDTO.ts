import { IsInt, IsNotEmpty, IsOptional, Max, Min } from "class-validator";

export class UpdateProfileDTO {// extends GenericDTO{
   
    @IsOptional()
    @IsInt()
    id : number;

    @IsNotEmpty({message : 'Profile name must be defined'})    
    name : string;

    @Min(3)
    @Max(15)
    @IsInt()    
    maxListing  : number;

    @IsOptional()
    description : string;

    @IsOptional()
    status : number;
    
}