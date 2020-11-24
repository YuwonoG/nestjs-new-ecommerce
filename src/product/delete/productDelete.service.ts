import { Injectable } from "@nestjs/common";
import { ProductDeleteRepository } from "./productDelete.repository";
import { GenericService } from "../../global/class/generic.service";
import { IQueryParamByID } from "../../global/interface/iQueryParamByID.interface";
import { Product } from "../product.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductDeleteService extends GenericService<Product>{
    execute(param: IQueryParamByID<string>): Promise<void> {
        console.log("Delete Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(ProductDeleteRepository)
        private readonly repository : ProductDeleteRepository){
        super();
    }

    
}