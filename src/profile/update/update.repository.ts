import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { UpdateProfileDTO } from "../dto/updateProfileDTO";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../general.repository";
import { iDTO } from "../dto/dto.interface";

@EntityRepository(Profile)
export class UpdateRepository extends GeneralRepository<Profile>{    
    async execute(dto : iDTO, user : User): Promise<Profile> {
        console.log("UpdateRepository - execution");
        const updateProfileDTO = dto as UpdateProfileDTO;
        const {id, name, maxListing, description, status} = updateProfileDTO;
        console.log('updateProfile - repository');
        console.log(updateProfileDTO);

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