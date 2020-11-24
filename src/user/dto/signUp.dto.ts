import {IsEmail, IsNotEmpty, IsOptional, MinLength, ValidateIf} from 'class-validator';
import { Profile } from 'src/profile/profile.entity';

export class SignUpDTO{
    @IsOptional()
    @MinLength(3, {message: 'Username is too short'})
    username:string;

    @ValidateIf((o) => o.username && o.length > 0)
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(5, {message: 'Password is too short'})
    password : string;

    @MinLength(3, {message: 'First name is too short'})
    firstName:string;

    @MinLength(3, {message: 'Last name is too short'})
    lastName:string;

    @IsOptional()
    sellerProfile: Profile;

    @IsOptional()
    buyerProfile: Profile;

}