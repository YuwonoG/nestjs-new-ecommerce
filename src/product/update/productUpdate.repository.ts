import { NotFoundException } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { EntityRepository } from "typeorm";
import { GeneralRepository } from "../../global/class/general.repository";
import { IUpdateParam } from "../../global/interface/iUpdateParam.interface";
import { CreateProductDTO } from "../dto/createProduct.dto";
import { UpdateProductDTO } from "../dto/updateProduct.dto";
import { Product } from "../product.entity";


@EntityRepository(Product)
export class ProductUpdateRepository extends GeneralRepository<Product>{
    async execute(param: IUpdateParam<UpdateProductDTO>): Promise<void | Product | Product[]> {
        console.log(`UpdateRepository - Params ${JSON.stringify(param)}`);        
        let result;
        const user : User = param.getUser();
        const createProductDTO = param.getDTO<CreateProductDTO>();
        const {uuid, sku, name, description, tags, weight } = createProductDTO;

        const selectedProduct = await this.getEntityByUUID(uuid); //this.findOne({where : [{id : id}]});
        if (selectedProduct.createdByUUID === user.uuid)
        {
            selectedProduct.sku = sku;
            selectedProduct.name = name;
            selectedProduct.description = description;
            selectedProduct.tags = tags;
            selectedProduct.weight = weight;
            selectedProduct.updatedByUUID = user.uuid;
    
            try{
                result = await selectedProduct.save();
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
            throw new NotFoundException(`Product is not found.`);
        }
        return result;
 }    

    
}