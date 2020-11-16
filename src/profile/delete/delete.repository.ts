import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../general.repository";
import { DeleteProfileDTO } from "../dto/deleteProfileDTO";
import { RecordStatus } from "src/enum/record.enum";
import { iDTO } from "../dto/dto.interface";
import { IBaseParam } from "../interface/baseParam.interface";
import { IQueryParamByID } from "../interface/queryParam.interface";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(Profile)
export class DeleteRepository extends GeneralRepository<Profile>{
    async execute(param: IQueryParamByID): Promise<void | Profile | Profile[]> {
        console.log(`QueryRepository - execute - ${JSON.stringify(param)}`);
    
        // const deleteProfileDTO = dto as DeleteProfileDTO;
        const id = param.getID();
        const user = param.getUser();

        const result = await this.delete({id : id}) //getEntityById(id);
        if (!result || result.affected === 0 ){
            throw new NotFoundException(`Entity '${id}' is not found.`);
        }
       
        return null;
    }    

    
}