import { IsOptional } from "class-validator";

export class QueryProfileDTO{
    
    @IsOptional()
    maxListing : number;
}