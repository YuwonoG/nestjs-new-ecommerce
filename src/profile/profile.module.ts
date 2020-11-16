import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { CreateService } from './create/create.service';
import { ProfileController } from './profile.controller';
import { CreateRepository } from './create/create.repository';

import { UpdateRepository } from './update/update.repository';
import { UpdateService } from './update/update.service';
import { ProfileRepository } from './profile.repository';
import { ProfileService } from './profile.service';
import { DeleteRepository } from './delete/delete.repository';
import { DeleteService } from './delete/delete.service';
import { QueryService } from './query/query.service';
import { QueryRepository } from './query/query.repository';

@Module({
    imports:[TypeOrmModule.forFeature([ProfileRepository, CreateRepository, UpdateRepository, DeleteRepository, QueryRepository]), UserModule],
    controllers: [ProfileController],
    providers: [ProfileService, CreateService, UpdateService, DeleteService, QueryService]
  })
export class ProfileModule {}
