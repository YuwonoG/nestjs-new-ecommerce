import { UOM } from "src/enum/uom.enum";
import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { GeneralRepository } from "../../global/class/general.repository";
import { IUpdateParam } from "../../global/interface/updateParam.interface";
import { CreateProductDTO } from "../dto/createProductDTO";
import { UpdateProductDTO } from "../dto/updateProductDTO";
import { Product } from "../product.entity";


@EntityRepository(Product)
export class UpdateRepository extends GeneralRepository<Product>{
    async execute(param: IUpdateParam<UpdateProductDTO>): Promise<void | Product | Product[]> {
        console.log(`UpdateRepository - Params ${JSON.stringify(param)}`);        
        const user : User = param.getUser();
        const createProductDTO = param.getDTO<CreateProductDTO>();
        const {uuid, sku, name, description, tags, weight } = createProductDTO;

        const selectedProduct = await this.getEntityByUUID(uuid); //this.findOne({where : [{id : id}]});

        return await selectedProduct.save();
 }    

    
}