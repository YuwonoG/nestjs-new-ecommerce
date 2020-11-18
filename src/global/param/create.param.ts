import { User } from "src/user/user.entity";
import { ICreateParam } from "../interface/createParam.interface";

export class CreateParam<T> implements ICreateParam<T>{
    _user: User;
    getUser(): User {
        return this._user;
    }
    _dto: T;
    getDTO<T>(): any|T {
       return  this._dto;

    }
    constructor(dto: T, user:User){
        this._dto = dto;
        this._user = user;
    }
    
    // _dto: iDTO;
    // _user: User;

    // constructor(dto: iDTO, user:User){
    //     this._dto = dto;
    //     this._user = user;
    // }
    // getDTO(): iDTO {
    //     return this._dto;
    // }
    // getUser(): User {
    //     return this._user;
    // }
}