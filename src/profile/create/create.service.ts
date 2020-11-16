import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { CreateRepository } from "./create.repository";
import { Profile } from ".././profile.entity";
import { GenericService } from ".././generic.service";
import { iDTO } from "../dto/dto.interface";
import { IBaseParam } from "../interface/baseParam.interface";
import { ICreateParam } from "../interface/createParam.interface";

@Injectable()
export class CreateService extends GenericService<Profile>{
    execute(param: ICreateParam): Promise<any> {
        console.log("Create Service");
        return this.repository.execute(param);
    }
    constructor(private readonly repository : CreateRepository){
        super();
    }

    
}