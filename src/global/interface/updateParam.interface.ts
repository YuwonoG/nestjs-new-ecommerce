import { IBaseParam } from "./baseParam.interface";
import { iDTO } from "./dto.interface";

export interface IUpdateParam<T> extends IBaseParam, iDTO<T>{
    // _dto : iDTO;
    // getDTO(): iDTO;
}