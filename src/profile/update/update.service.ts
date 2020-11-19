import { Injectable } from "@nestjs/common";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { UpdateRepository } from "./update.repository";
import { IUpdateParam } from "../../global/interface/updateParam.interface";
import { UpdateProfileDTO } from "../dto/updateProfileDTO";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class UpdateService extends GenericService<Profile>{
    execute(param: IUpdateParam<UpdateProfileDTO>): Promise<any> {
        console.log("Update Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(UpdateRepository)
        private readonly repository : UpdateRepository){        
        super();
    }

    
}