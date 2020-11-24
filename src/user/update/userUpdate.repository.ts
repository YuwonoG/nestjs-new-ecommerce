import { NotFoundException } from "@nestjs/common";
import { profile } from "console";
import { ProfileQueryRepository } from "src/profile/query/profileQuery.repository";
import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { GeneralRepository } from "../../global/class/general.repository";
import { IUpdateParam } from "../../global/interface/iUpdateParam.interface";
import { UpdateUserDTO } from "../dto/updateUser.dto";


@EntityRepository(User)
export class UserUpdateRepository extends GeneralRepository<User>{
    async execute(param: IUpdateParam<UpdateUserDTO>): Promise<void | User | User[]> {
        console.log(`UpdateRepository - Params2 ${JSON.stringify(param)}`);        
        let result;
        const user : User = param.getUser();
        const updateUserDTO = param.getDTO<UpdateUserDTO>();
        const {uuid,firstName, lastName, sellerProfile } = updateUserDTO;
        const profileQueryRepository = new  ProfileQueryRepository();
const profile =  profileQueryRepository.getEntityById(2);        
        console.log(`sellerProfile : ${JSON.stringify(profile)}` );
        const selectedUser = await this.getEntityByUUID(uuid); //this.findOne({where : [{id : id}]});
        if (selectedUser.uuid === user.uuid)
        {
            console.log(`Firstname : ${firstName} , Lastname : ${lastName} `);
            selectedUser.firstName = firstName;
            selectedUser.lastName = lastName;
            selectedUser.sellerProfile = sellerProfile;
            selectedUser.updatedByUUID = user.uuid;
    
            try{
                result = await selectedUser.save();
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
        }
        else{
            throw new NotFoundException(`User is not found.`);
        }
        return result;
 }    

    
}