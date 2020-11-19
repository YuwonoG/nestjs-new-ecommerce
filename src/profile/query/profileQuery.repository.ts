import { EntityRepository } from "typeorm";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../../global/class/general.repository";
import { IQueryParamByID } from "../../global/interface/queryParamByID.interface";
import { User } from "src/user/user.entity";


@EntityRepository(Profile) 
export class ProfileQueryRepository extends GeneralRepository<Profile>{    
    async execute(param : IQueryParamByID<number>): Promise<void | Profile | Profile[]> {
        console.log(`QueryRepository - execute - ${JSON.stringify(param)}`);
        const id : number = param.getID<number>() ;
        const user : User = param.getUser();
      
        
        console.log(`QueryRepository  - ID = ${JSON.stringify(id)}`);
        console.log(`QueryRepository  - User = ${JSON.stringify(user)}`);


        if (id)
        {
            return await this.getEntityById(id);    
        }
        return await this.getAllEntities();

    }
    
}