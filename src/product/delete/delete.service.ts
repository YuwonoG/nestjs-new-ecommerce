import { Injectable } from "@nestjs/common";
import { DeleteRepository } from "./delete.repository";
import { GenericService } from "../../global/class/generic.service";
import { IQueryParamByID } from "../../global/interface/queryParamByID.interface";
import { Product } from "../product.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DeleteService extends GenericService<Product>{
    execute(param: IQueryParamByID<string>): Promise<void> {
        console.log("Delete Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(DeleteRepository)
        private readonly repository : DeleteRepository){
        super();
    }

    
}