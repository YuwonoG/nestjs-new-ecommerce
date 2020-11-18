import { IBaseParam } from "./baseParam.interface";
import { iDTO } from "./dto.interface";

export interface ICreateParam<T> extends IBaseParam, iDTO<T>{
    // readonly _dto : iDTO;
    // getDTO(): iDTO;
}