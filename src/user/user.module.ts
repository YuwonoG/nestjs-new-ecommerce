import { forwardRef, Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfig } from 'src/config/jwt.config';
import { Profile } from 'src/profile/profile.entity';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileQueryRepository } from 'src/profile/query/profileQuery.repository';
import { ProfileQueryService } from 'src/profile/query/profileQuery.service';
import { UserCreateRepository } from './create/create.repository';
import { UserCreateService } from './create/create.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserQueryRepository } from './query/userQuery.repository';
import { UserQueryService } from './query/userQuery.service';
import { UserUpdateRepository } from './update/userUpdate.repository';
import { UserUpdateService } from './update/userUpdate.service';
import { UserController } from './user.controller';
import { UserRepository} from './user.repository'
import { UserService } from './user.service';

@Global()
@Module({
  imports:[
    PassportModule.register(
      {defaultStrategy: 'jwt'}
    ),
    JwtModule.register({
      secret: 'JwtConfig.secretOrKey',
      signOptions:{
        // algorithm : "ES384",
        expiresIn : 3600,
      }
    }),
    TypeOrmModule.forFeature([UserRepository, UserCreateRepository, UserQueryRepository, UserUpdateRepository, ProfileQueryRepository])
    , ProfileModule
  ],
  controllers: [UserController],
  providers: [ 
    UserService, JwtStrategy, UserCreateService,  UserQueryService, UserUpdateService    
    
  ],
  exports:[
    JwtStrategy, PassportModule
  ]
})
export class UserModule {}
