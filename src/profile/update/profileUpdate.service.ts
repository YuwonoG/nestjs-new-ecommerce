import { Injectable } from "@nestjs/common";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { ProfileUpdateRepository } from "./profileUpdate.repository";
import { IUpdateParam } from "../../global/interface/iUpdateParam.interface";
import { UpdateProfileDTO } from "../dto/updateProfile.dto";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProfileUpdateService extends GenericService<Profile>{
    execute(param: IUpdateParam<UpdateProfileDTO>): Promise<any> {
        console.log("Update Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(ProfileUpdateRepository)
        private readonly repository : ProfileUpdateRepository){        
        super();
    }

    
}