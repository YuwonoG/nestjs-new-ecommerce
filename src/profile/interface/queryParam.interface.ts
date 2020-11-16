import { IBaseParam } from "./baseParam.interface";

export interface IQueryParamByID extends IBaseParam{
    readonly _id : number;
    getID():number;
}