import { IsOptional } from "class-validator";

export class QueryProfileDTO{//} extends GenericDTO{
    @IsOptional()
    id : number;

    @IsOptional()
    maxListing : number;
}