import { Injectable } from "@nestjs/common";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { ProfileQueryRepository } from "./profileQuery.repository";
import { IQueryParamByID} from "../../global/interface/queryParamByID.interface"
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProfileQueryService extends GenericService<Profile>{
    constructor(
        @InjectRepository(ProfileQueryRepository)
        private readonly repository : ProfileQueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID<number>): Promise<any> {
        console.log(`Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}