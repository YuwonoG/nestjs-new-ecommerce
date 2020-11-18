import { Injectable } from "@nestjs/common";
import { DeleteRepository } from "./delete.repository";
import { Profile } from "../profile.entity";
import { GenericService } from "../../global/class/generic.service";
import { IQueryParamByID } from "../../global/interface/queryParam.interface";

@Injectable()
export class DeleteService extends GenericService<Profile>{
    execute(param: IQueryParamByID): Promise<void> {
        console.log("Delete Service");
        return this.repository.execute(param);
    }
    constructor(private readonly repository : DeleteRepository){
        super();
    }

    
}