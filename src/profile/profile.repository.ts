import { NotFoundException } from "@nestjs/common";
import { RecordStatus } from "src/enum/record.enum";
import { User } from "src/user/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateProfileDTO } from "./dto/createProfileDTO";
import { UpdateProfileDTO } from "./dto/updateProfileDTO";

import { Profile } from "./profile.entity";


@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
    async createProfile(createDateDTO: CreateProfileDTO, user : User) : Promise<Profile> {
        const {name, maxListing, description} = createDateDTO;
       console.log("Create Profile " +JSON.stringify(user));

       const newProfile = new Profile();
       newProfile.name = name;
       newProfile.maxListing = maxListing;
       newProfile.description = description;
       newProfile.createdByUUID = user.uuid;
       newProfile.updatedByUUID = user.uuid;

       return await newProfile.save();
   }
 
   async updateProfile(updateProfileDTO: UpdateProfileDTO, user : User) : Promise<Profile>{
    const {id, name, maxListing, description, status} = updateProfileDTO;
    console.log('updateProfile - repository');
    console.log(updateProfileDTO);

    const selectedProfile = await this.getProfileById(id);
    selectedProfile.name = name;
    selectedProfile.maxListing = maxListing;
    selectedProfile.description = description;
    selectedProfile.status = status;
    selectedProfile.createdByUUID = user.uuid;
    selectedProfile.updatedByUUID = user.uuid;

    return await selectedProfile.save();
    }
    
    async deleteProfile(id:number, user: User):Promise<void>{
        const profile = await this.getProfileById(id);
        profile.status = RecordStatus.DELETED;
        profile.updatedByUUID = user.uuid;

        profile.save();
    }

    async getProfiles() : Promise<Profile[]> {
        const profiles = await this.find();
        if (!profiles){
            throw new NotFoundException(`Profile has not been defined.`);            
        }
        return profiles;
        
    }

    async getProfileById(id : number):Promise<Profile>{
        const profile = await this.findOne({where : {id : id}});
        if (!profile){
            throw new NotFoundException(`Profile not found`);            
        }
        return profile;
    }
}
