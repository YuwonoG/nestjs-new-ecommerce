import { Injectable } from "@nestjs/common";
import { Product } from "../product.entity";
import { GenericService } from "../../global/class/generic.service";
import { ProductUpdateRepository } from "./productUpdate.repository";
import { IUpdateParam } from "../../global/interface/iUpdateParam.interface";
import { UpdateProductDTO } from "../dto/updateProduct.dto";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProductUpdateService extends GenericService<Product>{
    execute(param: IUpdateParam<UpdateProductDTO>): Promise<any> {
        console.log("Update Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(ProductUpdateRepository)
        private readonly repository : ProductUpdateRepository){        
        super();
    }

    
}