import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/user.entity';

import { CreateProfileDTO } from './dto/createProfileDTO';
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
    constructor(private readonly profileRepository : ProfileRepository){}

    async getProfiles() : Promise<Profile[]> {
        console.log('Executing Service - getProfiles');
        const profiles = this.profileRepository.find();
        if (!profiles){
            throw new NotFoundException(`Profile has not been defined.`);            
        }
        return profiles;
        
    }
    async getProfileById(id : number){
        const profile = this.profileRepository.findOne({where : {id : id}});
        if (!profile){
            throw new NotFoundException(`Profile not found`);            
        }
        return profile;
    }

    async createProfile(createDateColumn: CreateProfileDTO, user : User) {
         const {name, maxListing, description} = createDateColumn;
        console.log("Create Profile " +JSON.stringify(user));

        const newProfile = new Profile();
        newProfile.name = name;
        newProfile.maxListing = maxListing;
        newProfile.description = description;
        newProfile.createdByUUID = user.uuid;
        newProfile.updatedByUUID = user.uuid;

        newProfile.save();
    }

}
