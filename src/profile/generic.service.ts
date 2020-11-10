import { User } from 'src/user/user.entity';

export abstract class GenericService<T> {    
    abstract async execute(param : any, user: User):Promise<T | void>;   
}
