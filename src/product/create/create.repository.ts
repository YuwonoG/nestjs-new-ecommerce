import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { GeneralRepository } from "../../global/class/general.repository";
import { ICreateParam } from "../../global/interface/iCreateParam.interface";
import { CreateProductDTO } from "../dto/createProduct.dto";
import { Product } from "../product.entity";

@EntityRepository(Product)
export class CreateRepository extends GeneralRepository<Product>{    
    async execute(param: ICreateParam<CreateProductDTO>): Promise<Product> {
        console.log(`CreateRepository - Params ${JSON.stringify(param)}`);        
        const user : User = param.getUser();
        const createProductDTO = param.getDTO<CreateProductDTO>();
        const {sku, name, description, tags, weight } = createProductDTO;

       const newProduct = new Product();
       newProduct.sku = sku;
       newProduct.name = name;
       newProduct.description = description;
       newProduct.tags = tags;
       newProduct.weight = weight;

       newProduct.createdByUUID = user.uuid;
       newProduct.updatedByUUID = user.uuid;


       return  await newProduct.save();        
    }
    
}