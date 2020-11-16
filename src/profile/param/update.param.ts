import { User } from "src/user/user.entity";
import { iDTO } from "../dto/dto.interface";
import { IUpdateParam } from "../interface/updateParam.interface";

export class UpdateParam implements IUpdateParam{
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