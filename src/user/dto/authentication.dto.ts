import {IsEmail, IsNotEmpty, IsOptional, MinLength, ValidateIf} from 'class-validator';

export class AuthenticationDTO{
    @IsOptional()
    @MinLength(3, {message: 'Username is too short'})
    username:string;

    @ValidateIf((o) => o.username && o.length > 0)
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    password : string;
}