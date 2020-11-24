import { SignUpDTO } from "src/user/dto/signUp.dto";
import { EntityRepository, FindOneOptions, Repository } from "typeorm";
import { User } from "./user.entity";
import { v4 as uuidv4} from 'uuid';
import { AuthenticationDTO } from "./dto/authentication.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ErrorCode, ErrorMessage } from "../enum/errorCode.enum";
import * as bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authenticationCredentialDTO: SignUpDTO): Promise<void> {
        const { email, password, firstName, lastName } = authenticationCredentialDTO;
        let { username } = authenticationCredentialDTO;
        
        if (!username) username = email;

        const user = new User();

        const uuid = uuidv4();
        user.uuid = uuid;
        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;

        user.email = email;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.createdByUUID = uuid;
        user.updatedByUUID = uuid;

        try{
            await user.save();
        } catch (error){
            
            if (error.code === ErrorCode.DB_UNIQUE_CONSTRAINT){
                throw new ConflictException(ErrorMessage.DB_UNIQUE_CONSTRAINT);
            }
            else{
                throw new InternalServerErrorException();
            }
        }

    }

    private async hashPassword(password :string, salt : string):Promise<string>{
        return await bcrypt.hash(password, salt);
    }

    private async validatePassword(password : string, user : User):Promise<boolean>{
        const hash  = await this.hashPassword(password, user.salt);
        const result =  hash === user.password;
        return result;
    }

    async findUser(options?: FindOneOptions<User>):Promise<User>{
        const user = await this.findOne(options);
        return user;
    }


    async validateUserPassword(authenticationDTO : AuthenticationDTO): Promise<string>{
        const {email, password} = authenticationDTO;
        let {username} = authenticationDTO;

        if (!username) {
            username = email;
        }

        const user = await this.findUser(
            {
                select :["username", "password", "salt"
                ],
                where : 
                [
                    {username : username}
                ]
            }
        );
        
        if (user && await this.validatePassword(password, user))
        {
            return username;
        }
        else{
            return null;
        }
    }

}

