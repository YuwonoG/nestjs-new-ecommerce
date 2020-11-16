import { IBaseParam } from "./baseParam.interface";
import { iDTO } from "../dto/dto.interface";

export interface IUpdateParam extends IBaseParam{
    _dto : iDTO;
    getDTO(): iDTO;
}