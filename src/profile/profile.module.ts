import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { ProfileService } from './profile.service';

@Module({
    imports:[TypeOrmModule.forFeature([ProfileRepository]), UserModule],
    controllers: [ProfileController],
    providers: [ProfileService]
  })
export class ProfileModule {}
