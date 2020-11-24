import { IBaseParam } from "./iBaseParam.interface";
import { iDTO } from "./iDTO.interface";

export interface IUpdateParam<T> extends IBaseParam, iDTO<T>{
    // _dto : iDTO;
    // getDTO(): iDTO;
}