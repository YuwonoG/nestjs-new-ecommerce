import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { UpdateProfileDTO } from "../dto/updateProfileDTO";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../general.repository";
import { iDTO } from "../dto/dto.interface";
import { IBaseParam } from "../interface/baseParam.interface";
import { IUpdateParam } from "../interface/updateParam.interface";

@EntityRepository(Profile)
export class UpdateRepository extends GeneralRepository<Profile>{
    async execute(param: IUpdateParam): Promise<void | Profile | Profile[]> {
        console.log(`UpdateRepository - Params ${JSON.stringify(param)}`);        
        const user = param.getUser();
        const updateProfileDTO = param.getDTO() as UpdateProfileDTO;
        const {id, name, maxListing, description, status} = updateProfileDTO;

        const selectedProfile = await this.getEntityById(id); //this.findOne({where : [{id : id}]});
        selectedProfile.name = name;
        selectedProfile.maxListing = maxListing;
        selectedProfile.description = description;
        selectedProfile.status = status;
        selectedProfile.createdByUUID = user.uuid;
        selectedProfile.updatedByUUID = user.uuid;

        return await selectedProfile.save();
 }    

    
}