import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { CreateService } from './create/create.service';
import { ProfileController } from './profile.controller';
import { CreateRepository } from './create/create.repository';

import { ProfileUpdateRepository } from './update/profileUpdate.repository';
import { ProfileUpdateService } from './update/profileUpdate.service';
import { ProfileDeleteRepository } from './delete/profileDelete.repository';
import { ProfileDeleteService } from './delete/profileDelete.service';
import { ProfileQueryService } from './query/profileQuery.service';
import { ProfileQueryRepository } from './query/profileQuery.repository';

@Module({
    imports:[TypeOrmModule.forFeature([CreateRepository, ProfileUpdateRepository, ProfileDeleteRepository, ProfileQueryRepository]), UserModule],
    controllers: [ProfileController],
    providers: [CreateService, ProfileUpdateService, ProfileDeleteService, ProfileQueryService]
  })
export class ProfileModule {}
