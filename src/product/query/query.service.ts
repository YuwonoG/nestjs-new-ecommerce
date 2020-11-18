import { Injectable } from "@nestjs/common";
import { Product } from "../product.entity";
import { GenericService } from "../../global/class/generic.service";
import { QueryRepository } from "./query.repository";
import { IQueryParamByID} from "../../global/interface/queryParam.interface"


@Injectable()
export class QueryService extends GenericService<Product>{
    constructor(private readonly repository : QueryRepository){    
        super();    
    }
    execute(param : IQueryParamByID): Promise<Product | Product[] | void> {
        console.log(`Query Service - ${JSON.stringify(param)}`);
        return this.repository.execute(param);
    }

    


    
    
}