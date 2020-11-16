import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
<<<<<<< HEAD



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
=======
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, ProfileModule],
>>>>>>> role
  controllers : [],
  providers: [],
})
export class AppModule {}
