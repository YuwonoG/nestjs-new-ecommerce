
import { IBaseParam } from '../interface/baseParam.interface';
import { ICreateParam } from '../interface/createParam.interface';
import { IQueryParamByID } from '../interface/queryParam.interface';
import { IUpdateParam } from '../interface/updateParam.interface';

export abstract class GenericService<T> {    
    // abstract async execute(param? : any, user?: User):Promise<T | T[] | void>;   
    abstract async execute(param : IBaseParam | ICreateParam<T> | IUpdateParam<T> | IQueryParamByID): Promise<T | T[] | void>;   

}
