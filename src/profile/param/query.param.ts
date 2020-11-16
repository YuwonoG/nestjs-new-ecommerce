import { User } from "src/user/user.entity";
import { IQueryParamByID } from "../interface/queryParam.interface";


export class QueryParamByID implements IQueryParamByID{
    _id: number;
    _user: User;

    constructor(id: number, user:User){
        this._id = id;
        this._user = user;
    }

    getID() : number{
        return this._id;
    }

    getUser() : User {
        return this._user;
    }
}