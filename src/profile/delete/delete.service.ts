import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { DeleteRepository } from "./delete.repository";
import { Profile } from "../profile.entity";
import { GenericService } from "../generic.service";
import { iDTO } from "../dto/dto.interface";

@Injectable()
export class DeleteService extends GenericService<Profile>{
    constructor(private readonly repository : DeleteRepository){
        super();
    }
    execute(dto: iDTO, user : User): Promise<void> {
        console.log("Delete Service");
        return this.repository.execute(dto, user);
    }
    
}