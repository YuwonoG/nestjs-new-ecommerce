import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, ProfileModule],
  controllers : [],
  providers: [],
})
export class AppModule {}
