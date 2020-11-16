import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { DeleteRepository } from "./delete.repository";
import { Profile } from "../profile.entity";
import { GenericService } from "../generic.service";
import { iDTO } from "../dto/dto.interface";
import { IBaseParam } from "../interface/baseParam.interface";
import { IQueryParamByID } from "../interface/queryParam.interface";

@Injectable()
export class DeleteService extends GenericService<Profile>{
    execute(param: IQueryParamByID): Promise<any> {
        console.log("Delete Service");
        return this.repository.execute(param);
    }
    constructor(private readonly repository : DeleteRepository){
        super();
    }

    
}