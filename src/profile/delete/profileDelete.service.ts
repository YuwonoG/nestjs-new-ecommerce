import { Injectable } from "@nestjs/common";
import { ProfileDeleteRepository } from "./profileDelete.repository";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { IQueryParamByID } from "../../global/interface/iQueryParamByID.interface";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProfileDeleteService extends GenericService<Profile>{
    constructor(
        @InjectRepository(ProfileDeleteRepository)
        private readonly repository : ProfileDeleteRepository){
        super();
    }
    execute(param: IQueryParamByID<number>): Promise<void> {
        console.log("Delete Service");
        return this.repository.execute(param);
    }
    
}