import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { Profile } from "../profile.entity";
import { GenericService } from "../generic.service";
import { UpdateRepository } from "./update.repository";
import { iDTO } from "../dto/dto.interface";

@Injectable()
export class UpdateService extends GenericService<Profile>{
    constructor(private readonly repository : UpdateRepository){        
        super();
    }
    execute(dto: iDTO, user :User): Promise<Profile> {
        console.log("Update Service");
        return this.repository.execute(dto, user);
    }
    
}