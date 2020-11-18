import { Injectable } from "@nestjs/common";
import { CreateRepository } from "./create.repository";
import { Profile } from ".././profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { ICreateParam } from "../../global/interface/createParam.interface";
import { CreateProfileDTO } from "../dto/createProfileDTO";

@Injectable()
export class CreateService extends GenericService<Profile>{
    execute(param: ICreateParam<CreateProfileDTO>): Promise<Profile> {
        console.log("Create Service");
        return this.repository.execute(param);
    }
    constructor(private readonly repository : CreateRepository){
        super();
    }

    
}