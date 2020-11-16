import { User } from "src/user/user.entity";
import { ICreateParam } from "../interface/createParam.interface";
import { iDTO } from "../dto/dto.interface";

export class CreateParam implements ICreateParam{
    _dto: iDTO;
    _user: User;

    constructor(dto: iDTO, user:User){
        this._dto = dto;
        this._user = user;
    }
    getDTO(): iDTO {
        return this._dto;
    }
    getUser(): User {
        return this._user;
    }
}