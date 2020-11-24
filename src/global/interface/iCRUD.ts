import { ICreateParam } from "./iCreateParam.interface";
import { IQueryParamByID } from "./iQueryParamByID.interface";
import { IUpdateParam } from "./iUpdateParam.interface";

export interface iCRUD<Entity, DTO>{
    create<Entity>(param : ICreateParam<DTO>): boolean;
    update<Entity>(param : IUpdateParam<DTO>): Promise<Entity>;
    delete<Entity>(param : IQueryParamByID<DTO>) : boolean;
}