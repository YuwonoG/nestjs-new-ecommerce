import { EntityRepository } from "typeorm";
import { Profile } from "../profile.entity";
import { GeneralRepository } from "../../global/class/general.repository";
import { IQueryParamByID } from "../../global/interface/iQueryParamByID.interface";
import { User } from "src/user/user.entity";


@EntityRepository(Profile) 
export class ProfileQueryRepository extends GeneralRepository<Profile>{    
    async execute(param : IQueryParamByID<number>): Promise<any> {
        console.log(`ProfileQueryRepository - execute - ${JSON.stringify(param)}`);
        const id : number = param.getID<number>() ;
        const user : User = param.getUser();
      
        
        console.log(`ProfileQueryRepository  - ID = ${JSON.stringify(id)}`);
        console.log(`ProfileQueryRepository  - User = ${JSON.stringify(user)}`);


        if (id)
        {
            return await this.getEntityById(id);    
        }
        return await this.getAllEntities();

    }
    
}