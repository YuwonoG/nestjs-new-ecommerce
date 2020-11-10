import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { CreateProfileDTO } from "../dto/createProfileDTO";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../general.repository";
import { iDTO } from "../dto/dto.interface";

@EntityRepository(Profile)
export class CreateRepository extends GeneralRepository<Profile>{    
    async execute(dto : iDTO, user : User): Promise<Profile> {
        console.log("CreateRepository - execution");
        console.log("DTO " +JSON.stringify(dto));
        console.log("User " +JSON.stringify(user));
        const createProfileDTO = dto as CreateProfileDTO;
        console.log("CreateProfileDTO" +JSON.stringify(createProfileDTO));
        const {name, maxListing, description} = createProfileDTO;

       const newProfile = new Profile();
       newProfile.name = name;
       newProfile.maxListing = maxListing;
       newProfile.description = description;
       newProfile.createdByUUID = user.uuid;
       newProfile.updatedByUUID = user.uuid;

       return await newProfile.save();        
    }
    
}