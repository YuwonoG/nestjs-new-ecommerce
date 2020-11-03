import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { ProfileController } from './profile/profile.controller';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers : [ProfileController],
  providers: [],
})
export class AppModule {}
