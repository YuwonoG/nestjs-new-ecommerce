import { User } from "src/user/user.entity";
import { IUpdateParam } from "../interface/updateParam.interface";

export class UpdateParam<T> implements IUpdateParam<T>{
    _user: User;
    getUser(): User {
        return this._user;
    }
    _dto: T;
    getDTO<T>(): any| T {

        console.log(`UpdateParam - getDTO - ${typeof this._dto}` );
        return this._dto;
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