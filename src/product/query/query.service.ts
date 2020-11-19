import { Injectable, Query } from "@nestjs/common";
import { Product } from "../product.entity";
import { GenericService } from "../../global/class/generic.service";
import { QueryRepository } from "./query.repository";
import { IQueryParamByID} from "../../global/interface/queryParamByID.interface"
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class QueryService extends GenericService<Product>{
    constructor(
        @InjectRepository(QueryRepository)
        private readonly repository : QueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID<string>): Promise<Product | Product[] | void> {
        console.log(`Product - Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}