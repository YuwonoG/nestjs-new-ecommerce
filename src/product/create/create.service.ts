import { Injectable } from "@nestjs/common";
import { CreateRepository } from "./create.repository";
import { GenericService } from "../../global/class/generic.service";
import { ICreateParam } from "../../global/interface/createParam.interface";
import { Product } from "../product.entity";
import { CreateProductDTO } from "../dto/createProductDTO";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateService extends GenericService<Product>{
    execute(param: ICreateParam<CreateProductDTO>): Promise<Product> {
        console.log("Create Service");
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(CreateRepository)
        private readonly repository : CreateRepository){
        super();
    }

    
}