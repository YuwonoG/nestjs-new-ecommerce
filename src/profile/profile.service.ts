import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';

import { CreateProfileDTO } from "./dto/createProfileDTO";
import { UpdateProfileDTO } from "./dto/updateProfileDTO";
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
    constructor(private readonly profileRepository : ProfileRepository){}

    async getProfiles() : Promise<Profile[]> {
        return this.profileRepository.getProfiles();
        
    }
    async getProfileById(id : number){        
        return this.profileRepository.getProfileById(id);
    }

    async createProfile(createProfileDTO: CreateProfileDTO, user : User):Promise<Profile> {
        return await this.profileRepository.createProfile(createProfileDTO, user);
    }

    async updateProfile(updateProfileDTO: UpdateProfileDTO, user : User):Promise<Profile> {
        console.log("updateProfile - service");
        console.log(updateProfileDTO);
        return await this.profileRepository.updateProfile(updateProfileDTO, user);
    }

    async deleteProfile(id : number, user : User):Promise<void>{
        await this.profileRepository.deleteProfile(id, user);
    }
}
