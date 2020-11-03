import {IsEmail, IsNotEmpty, MinLength, ValidateIf} from 'class-validator';

export class AuthenticationCredentialDTO{
    @IsNotEmpty()
    @MinLength(3, {message: 'Username is too short'})
    username:string;

    @ValidateIf((o) => o.username && o.length > 0)
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(5, {message: 'Password is too short'})
    password : string;
}