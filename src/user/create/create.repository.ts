import { EntityRepository } from "typeorm";
import { SignUpDTO as CreateUserDTO } from "../dto/signUp.dto";
import { GeneralRepository } from "../../global/class/general.repository";
import { ICreateParam } from "../../global/interface/iCreateParam.interface";
import * as bcrypt from "bcrypt";
import { v4 as uuidv4} from 'uuid';
import { ErrorCode, ErrorMessage } from "src/enum/errorCode.enum";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { User } from "../user.entity";
import { ProfileQueryRepository } from "src/profile/query/profileQuery.repository";
import { InjectRepository } from "@nestjs/typeorm";

@EntityRepository(User)
export class UserCreateRepository extends GeneralRepository<User>{  
    constructor(
        @InjectRepository(ProfileQueryRepository)
        private profileQueryRepository : ProfileQueryRepository ){
        super();
    }
    async execute(param: ICreateParam<CreateUserDTO>): Promise<void> {
        console.log(`CreateRepository - Params ${JSON.stringify(param)}`);        
        const createUserDTO = param.getDTO<CreateUserDTO>();
        const { email, password, firstName, lastName, sellerProfile, buyerProfile } = createUserDTO;
        let { username } = createUserDTO;
        if (!username) username = email;

        const user = new User();

        const uuid = uuidv4();
        user.uuid = uuid;
        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;
        user.sellerProfile = sellerProfile;
        user.buyerProfile = buyerProfile;


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
}