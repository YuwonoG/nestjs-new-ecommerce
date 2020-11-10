import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../general.repository";
import { DeleteProfileDTO } from "../dto/deleteProfileDTO";
import { RecordStatus } from "src/enum/record.enum";
import { iDTO } from "../dto/dto.interface";

@EntityRepository(Profile)
export class DeleteRepository extends GeneralRepository<Profile>{    
    async execute(dto : iDTO, user : User): Promise<void> {
        console.log("DeleteRepository - execution");
        console.log("Param " + dto.toJSON());
        console.log("User " +JSON.stringify(user));
        const deleteProfileDTO = dto as DeleteProfileDTO;
        const {id} = deleteProfileDTO;

        const entity = await this.getEntityById(id);
        if (!entity){
            return null;
        }
        entity.status = RecordStatus.DELETED;
        entity.updatedByUUID = user.uuid;

        await entity.save();
       
        return null;
    }
    
}