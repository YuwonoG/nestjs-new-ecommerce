import { IsOptional } from "class-validator";
import { GenericDTO } from "./genericDTO";

export class QueryProfileDTO extends GenericDTO{
    @IsOptional()
    id : number;

    @IsOptional()
    maxListing : number;
}