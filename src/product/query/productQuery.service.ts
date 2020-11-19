import { Injectable } from "@nestjs/common";
import { Product } from "../product.entity";
import { GenericService } from "../../global/class/generic.service";
import { ProductQueryRepository } from "./productQuery.repository";
import { IQueryParamByID} from "../../global/interface/queryParamByID.interface"
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProductQueryService extends GenericService<Product>{
    constructor(
        @InjectRepository(ProductQueryRepository)
        private repository : ProductQueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID<string>): Promise<Product | Product[] | void> {
        console.log(`Product - Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}