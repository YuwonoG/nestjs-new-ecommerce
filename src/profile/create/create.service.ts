import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { CreateRepository } from "./create.repository";
import { Profile } from ".././profile.entity";
import { GenericService } from ".././generic.service";
import { iDTO } from "../dto/dto.interface";

@Injectable()
export class CreateService extends GenericService<Profile>{
    constructor(private readonly repository : CreateRepository){
        super();
    }
    execute(dto: iDTO, user : User): Promise<Profile> {
        console.log("Create Service");
        return this.repository.execute(dto, user);
    }
    
}