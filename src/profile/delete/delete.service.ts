import { Injectable } from "@nestjs/common";
import { DeleteRepository } from "./delete.repository";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { IQueryParamByID } from "../../global/interface/queryParamByID.interface";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DeleteService extends GenericService<Profile>{
    constructor(
        @InjectRepository(DeleteRepository)
        private readonly repository : DeleteRepository){
        super();
    }
    execute(param: IQueryParamByID<number>): Promise<void> {
        console.log("Delete Service");
        return this.repository.execute(param);
    }
    
}