import { IBaseParam } from "./baseParam.interface";
import { iDTO } from "../dto/dto.interface";

export interface ICreateParam extends IBaseParam{
    readonly _dto : iDTO;
    getDTO(): iDTO;
}