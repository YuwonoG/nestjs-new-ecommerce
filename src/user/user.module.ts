import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfig } from 'src/config/jwt.config';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserController } from './user.controller';
import { UserRepository} from './user.repository'
import { UserService } from './user.service';


@Module({
  imports:[
    PassportModule.register(
      {defaultStrategy: 'jwt'}
    ),
    JwtModule.register({
      secret: JwtConfig.secretOrKey,
      signOptions:{
        // algorithm : "ES384",
        expiresIn : 3600,
      }
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UserController],
  providers: [ 
    UserService, JwtStrategy,
  ],
  exports:[
    JwtStrategy, PassportModule
  ]
})
export class UserModule {}
