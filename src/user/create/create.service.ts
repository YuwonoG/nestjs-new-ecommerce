import { Injectable } from "@nestjs/common";
import { UserCreateRepository } from "./create.repository";
import { GenericService } from "../../global/class/generic.service";
import { ICreateParam } from "../../global/interface/iCreateParam.interface";
import { SignUpDTO as CreateUserDTO } from "../dto/signUp.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryParamByID } from "src/global/interface/iQueryParamByID.interface";
import { QueryParamByID } from "src/global/param/queryByID.param";
import { ProfileQueryService } from "src/profile/query/profileQuery.service";

@Injectable()
export class UserCreateService extends GenericService<void>{
    async execute(param: ICreateParam<CreateUserDTO>): Promise<void> {
        console.log("Create Service");
        const createUserDTO : CreateUserDTO = param.getDTO();
        const profileQueryParamByID : IQueryParamByID<number> = new QueryParamByID<number>(1, null);
        // console.log(`UserCreateService - profileQueryParamByID= ${JSON.stringify(profileQueryParamByID)}`);                 
        const profile = await this.profileQueryService.execute(profileQueryParamByID) as any;
        // console.log(`UserCreateService - Profile= ${JSON.stringify(profile)}`);        
        createUserDTO.sellerProfile = profile;
        createUserDTO.buyerProfile = profile;
        console.log(`UserCreateService - Updated DTO = ${JSON.stringify(createUserDTO)}`);
        return this.repository.execute(param);
    }
    constructor(
        @InjectRepository(UserCreateRepository)
        private readonly repository : UserCreateRepository
        , private readonly profileQueryService : ProfileQueryService
    ){
        super();
    }

    
}