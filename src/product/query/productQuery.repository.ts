import { EntityRepository} from "typeorm";
import { GeneralRepository } from "../../global/class/general.repository";
import { IQueryParamByID } from "../../global/interface/queryParamByID.interface";
import { User } from "src/user/user.entity";
import { Product } from "../product.entity";


@EntityRepository(Product)
export class ProductQueryRepository extends GeneralRepository<Product>{    
    async execute(param : IQueryParamByID<string>): Promise<Product | Product[] | void> {
        console.log(`Product - QueryRepository - execute - ${JSON.stringify(param)}`);
        const id : string = param.getID<string>();
        const user : User = param.getUser();
      
        
        console.log(`QueryRepository  - ID = ${JSON.stringify(id)}`);
        console.log(`QueryRepository  - User = ${JSON.stringify(user)}`);


        if (id)
        {
            return await this.findOne({where : {uuid : id}});// this.getEntityById(id);    
        }
        return await this.find();//this.getAllEntities();

    }
    
}