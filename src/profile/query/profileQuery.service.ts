import { Injectable } from "@nestjs/common";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { ProfileQueryRepository } from "./profileQuery.repository";
import { IQueryParamByID} from "../../global/interface/iQueryParamByID.interface"
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProfileQueryService extends GenericService<Profile>{
    constructor(
        @InjectRepository(ProfileQueryRepository)
        private readonly repository : ProfileQueryRepository){    
        super();    
    }
    async execute(param : IQueryParamByID<number>): Promise<void | Profile | Profile[]> {
        console.log(`Query Service - ${JSON.stringify(param)}`);
        const result = await this.repository.execute(param);
        console.log(`Query Service Result ${JSON.stringify(result)}`);
        return result;
    }

    


    
    
}