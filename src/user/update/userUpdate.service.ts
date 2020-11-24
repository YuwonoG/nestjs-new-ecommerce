import { Injectable } from "@nestjs/common";
import { User } from "../User.entity";
import { GenericService } from "../../global/class/generic.service";
import { UserUpdateRepository } from "./userUpdate.repository";
import { IUpdateParam } from "../../global/interface/iUpdateParam.interface";
import { UpdateUserDTO } from "../dto/updateUser.dto";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class UserUpdateService extends GenericService<User>{
    execute(param: IUpdateParam<UpdateUserDTO>): Promise<any> {
        console.log("Update Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(UserUpdateRepository)
        private readonly repository : UserUpdateRepository){        
        super();
    }

    
}