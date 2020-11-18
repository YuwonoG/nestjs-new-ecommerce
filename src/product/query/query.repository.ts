import { EntityRepository } from "typeorm";
import { Product } from "../product.entity";
import { GeneralRepository } from "../../global/class/general.repository";
import { IQueryParamByID } from "../../global/interface/queryParam.interface";
import { User } from "src/user/user.entity";


@EntityRepository(Product)
export class QueryRepository extends GeneralRepository<Product>{    
    async execute(param : IQueryParamByID): Promise<Product | Product[] | void> {
        console.log(`QueryRepository - execute - ${JSON.stringify(param)}`);
        const id : number = param.getID();
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