import { IBaseParam } from "./iBaseParam.interface";
import { iDTO } from "./iDTO.interface";

export interface ICreateParam<T> extends IBaseParam, iDTO<T>{
    // readonly _dto : iDTO;
    // getDTO(): iDTO;
}