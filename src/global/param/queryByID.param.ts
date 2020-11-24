import { User } from "src/user/user.entity";
import { IQueryParamByID } from "../interface/iQueryParamByID.interface";


export class QueryParamByID<T> implements IQueryParamByID<T>{
    _id: T;
    _user: User;

    constructor(id: T, user:User){
        this._id = id;
        this._user = user;
    }

    getID<T>() : T {
        return this._id as any;
    }
    getUser() : User {
        return this._user;
    }
}