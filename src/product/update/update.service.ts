import { Injectable } from "@nestjs/common";
import { Product } from "../product.entity";
import { GenericService } from "../../global/class/generic.service";
import { UpdateRepository } from "./update.repository";
import { IUpdateParam } from "../../global/interface/updateParam.interface";
import { UpdateProductDTO } from "../dto/updateProductDTO";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class UpdateService extends GenericService<Product>{
    execute(param: IUpdateParam<UpdateProductDTO>): Promise<any> {
        console.log("Update Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(UpdateRepository)
        private readonly repository : UpdateRepository){        
        super();
    }

    
}