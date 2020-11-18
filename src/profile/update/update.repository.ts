import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { UpdateProfileDTO } from "../dto/updateProfileDTO";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../../global/class/general.repository";
import { IUpdateParam } from "../../global/interface/updateParam.interface";

@EntityRepository(Profile)
export class UpdateRepository extends GeneralRepository<Profile>{
    async execute(param: IUpdateParam<UpdateProfileDTO>): Promise<void | Profile | Profile[]> {
        console.log(`UpdateRepository - Params ${JSON.stringify(param)}`);        
        const user : User = param.getUser();
        console.log('Param - before');        
        const updateProfileDTO = param.getDTO<UpdateProfileDTO>();
        console.log('Param - after');        

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