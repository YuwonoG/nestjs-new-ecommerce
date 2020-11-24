import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { UpdateProfileDTO } from "../dto/updateProfile.dto";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../../global/class/general.repository";
import { IUpdateParam } from "../../global/interface/iUpdateParam.interface";

@EntityRepository(Profile)
export class ProfileUpdateRepository extends GeneralRepository<Profile>{
    async execute(param: IUpdateParam<UpdateProfileDTO>): Promise<void | Profile | Profile[]> {
        let result;
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

        try{
            result = await selectedProfile.save();
        }
        catch(error){
            if (error.code === '23505'){
                console.log(`Error - ${error}`);
                console.log(`Code - ${error.code}`);
                console.log(`Detail - ${error.detail}`);
                console.log(`Query - ${error.query}`);
                console.log(`Parameters- ${error.paramters}`);
            }


        }
        return result;
 }    

    
}