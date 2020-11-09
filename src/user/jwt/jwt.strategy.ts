import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy} from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import {Strategy, ExtractJwt} from 'passport-jwt';
import { JwtConfig } from 'src/config/jwt.config';
import { iJWTPayload } from './jwt-payload.interface';
import { User } from '../user.entity';
import { UserRepository } from '../user.repository';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository,
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : 'JwtConfig.secretOrKey'
        });
    }

    async validate(payload : iJWTPayload): Promise<User>{
        const {username} = payload;
        const user = await this.userRepository.findUser(
            {
                select :["uuid", "username"
                ],
                where : 
                [
                    {username : username}
                ]
            }
        );

        if (!user)
        {
            throw new UnauthorizedException();
        }

        return user;    
        
    }
}