
import { IBaseParam } from '../interface/iBaseParam.interface';
import { ICreateParam } from '../interface/iCreateParam.interface';
import { IQueryParamByID } from '../interface/iQueryParamByID.interface';
import { IUpdateParam } from '../interface/iUpdateParam.interface';

export abstract class GenericService<T> {    
    // abstract async execute(param? : any, user?: User):Promise<T | T[] | void>;   
    abstract async execute(param : IBaseParam | ICreateParam<T> | IUpdateParam<T> | IQueryParamByID<T>): Promise<T | T[] | void>;   

}
