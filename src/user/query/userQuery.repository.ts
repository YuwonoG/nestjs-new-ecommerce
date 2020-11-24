import { EntityRepository } from "typeorm";

import { GeneralRepository } from "../../global/class/general.repository";
import { IQueryParamByID } from "../../global/interface/iQueryParamByID.interface";
import { User } from "src/user/user.entity";


@EntityRepository(User) 
export class UserQueryRepository extends GeneralRepository<User>{    
    async execute(param : IQueryParamByID<string>): Promise<void | User | User[]> {
        console.log(`QueryRepository - execute - ${JSON.stringify(param)}`);
        const id : string = param.getID<string>() ;
        const user : User = param.getUser();

        return await this.find({where : {id : id, user: user}, relations : ["sellerProfile"]});    
        // if (id)
        // {
        //     return await this.find({where : {id : id, user: user}, relations : ["sellerProfile"]});    
        // }
        // return await this.find( {relations : ["sellerProfile"]});   // this.getAllEntities();

    }
    
}