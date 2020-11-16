import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { Profile } from "../profile.entity";
import { GenericService } from "../generic.service";
import { QueryRepository } from "./query.repository";
import { IQueryParamByID} from "../interface/queryParam.interface"


@Injectable()
export class QueryService extends GenericService<Profile>{
    constructor(private readonly repository : QueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID): Promise<any> {
        console.log(`Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}