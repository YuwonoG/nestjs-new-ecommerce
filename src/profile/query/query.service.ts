import { Injectable } from "@nestjs/common";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { QueryRepository } from "./query.repository";
import { IQueryParamByID} from "../../global/interface/queryParamByID.interface"
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class QueryService extends GenericService<Profile>{
    constructor(
        @InjectRepository(QueryRepository)
        private readonly repository : QueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID<number>): Promise<any> {
        console.log(`Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}