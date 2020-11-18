import { User } from "src/user/user.entity";

export interface IBaseParam{
    readonly _user : User;
    getUser(): User;
}