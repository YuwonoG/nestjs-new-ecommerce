import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { iAccessToken } from './jwt/jwt.accessToken.interface';
import { AuthenticationDTO } from './dto/authentication.dto';
import { SignUpDTO } from './dto/signUp.dto';
import { iJWTPayload } from './jwt/jwt-payload.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService : JwtService

        ){}

        async createUser(signUpDTO : SignUpDTO): Promise<void>{
             return await this.userRepository.createUser(signUpDTO);
        }

        async signIn(authenticationDTO : AuthenticationDTO):Promise<iAccessToken>{
            const username = await this.userRepository.validateUserPassword(authenticationDTO);
            if (!username){
                throw new UnauthorizedException('Invalid username/password');
            }
            
            const payload : iJWTPayload = {username};
            const accessToken = await this.jwtService.sign(payload);
            const result : iAccessToken = {accessToken};
            return result;
       }
}
