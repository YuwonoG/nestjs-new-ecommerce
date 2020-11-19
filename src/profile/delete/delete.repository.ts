import { EntityRepository } from "typeorm";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../../global/class/general.repository";
import { IQueryParamByID } from "../../global/interface/queryParamByID.interface";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/user/user.entity";

@EntityRepository(Profile)
export class DeleteRepository extends GeneralRepository<Profile>{
    async execute(param: IQueryParamByID<number>): Promise<void> {
        console.log(`QueryRepository - execute - ${JSON.stringify(param)}`);
    
        // const deleteProfileDTO = dto as DeleteProfileDTO;
        const id : number = param.getID<number>();
        const user : User = param.getUser();

        const result = await this.delete({id : id}) //getEntityById(id);
        if (!result || result.affected === 0 ){
            throw new NotFoundException(`Entity '${id}' is not found.`);
        }
       
        return null;
    }    

    
}