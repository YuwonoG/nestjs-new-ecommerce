import { IBaseParam } from "./baseParam.interface";

export interface IQueryParamByID<T> extends IBaseParam{
    readonly _id : T;
    getID<T>(): T;
}