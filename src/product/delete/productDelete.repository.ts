import { EntityRepository } from "typeorm";
import { GeneralRepository } from "../../global/class/general.repository";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { Product } from "../product.entity";
import { IQueryParamByID } from "src/global/interface/iQueryParamByID.interface";

@EntityRepository(Product)
export class ProductDeleteRepository extends GeneralRepository<Product>{
    async execute(param: IQueryParamByID<string>): Promise<void> {
        console.log(`QueryRepository - execute - ${JSON.stringify(param)}`);
    
        // const deleteProductDTO = dto as DeleteProductDTO;
        const uuid : string  = param.getID<string>();
        const user : User = param.getUser();

        const result = await this.delete({uuid : uuid, createdByUUID : user.uuid}) //getEntityById(id);
        if (!result || result.affected === 0 ){
            throw new NotFoundException(`Entity '${uuid}' is not found.`);
        }
       
        return null;
    }    

    
}