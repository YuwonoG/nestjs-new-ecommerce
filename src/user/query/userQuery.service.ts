import { Injectable } from "@nestjs/common";

import { GenericService } from "../../global/class/generic.service";
import { UserQueryRepository } from "./userQuery.repository";
import { IQueryParamByID} from "../../global/interface/iQueryParamByID.interface"
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";


@Injectable()
export class UserQueryService extends GenericService<User>{
    constructor(
        @InjectRepository(UserQueryRepository)
        private readonly repository : UserQueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID<string>): Promise<any> {
        console.log(`Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}