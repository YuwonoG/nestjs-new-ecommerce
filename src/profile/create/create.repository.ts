import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { CreateProfileDTO } from "../dto/createProfileDTO";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../general.repository";
import { ICreateParam } from "../interface/createParam.interface";

@EntityRepository(Profile)
export class CreateRepository extends GeneralRepository<Profile>{    
    // async execute(dto : iDTO, user : User): Promise<Profile> {
    async execute(param: ICreateParam): Promise<Profile> {
        console.log(`CreateRepository - Params ${JSON.stringify(param)}`);        
        const user : User = param.getUser();
        const createProfileDTO = param.getDTO() as CreateProfileDTO;
        const {name, maxListing, description} = createProfileDTO;

       const newProfile = new Profile();
       newProfile.name = name;
       newProfile.maxListing = maxListing;
       newProfile.description = description;
       newProfile.createdByUUID = user.uuid;
       newProfile.updatedByUUID = user.uuid;

       return  await newProfile.save();        
    }
    
}