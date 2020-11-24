import {IsNotEmpty, IsOptional, MinLength} from 'class-validator';
import { Profile } from 'src/profile/profile.entity';

export class UpdateUserDTO{
    @IsOptional()
    uuid : string;

    @MinLength(3, {message: 'First name is too short'})
    firstName:string;

    @MinLength(3, {message: 'Last name is too short'})
    lastName:string;

    @IsNotEmpty()
    @MinLength(5, {message: 'Password is too short'})
    password : string;

    @IsOptional()
    buyerProfile : Profile;

    @IsOptional()
    selerProfile : Profile;

}