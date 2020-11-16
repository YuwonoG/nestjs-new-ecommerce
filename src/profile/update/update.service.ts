import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { Profile } from "../profile.entity";
import { GenericService } from "../generic.service";
import { UpdateRepository } from "./update.repository";
import { IBaseParam } from "../interface/baseParam.interface";
import { IUpdateParam } from "../interface/updateParam.interface";


@Injectable()
export class UpdateService extends GenericService<Profile>{
    execute(param: IUpdateParam): Promise<any> {
        console.log("Update Service");
        return this.repository.execute(param);
    }
    constructor(private readonly repository : UpdateRepository){        
        super();
    }

    
}