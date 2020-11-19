import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

import { ProductController } from './product.controller';

import { CreateService } from './create/create.service';
import { UpdateService } from './update/update.service';
import { QueryService } from './query/query.service';
import { DeleteService } from './delete/delete.service';

import { CreateRepository } from './create/create.repository';
import { UpdateRepository } from './update/update.repository';
import { QueryRepository } from './query/query.repository';
import { DeleteRepository } from './delete/delete.repository';

@Module({
  imports : [TypeOrmModule.forFeature([CreateRepository, UpdateRepository, DeleteRepository, QueryRepository]), UserModule],
  controllers: [ProductController],
  providers: [CreateService, UpdateService, DeleteService, QueryService]

  
})
export class ProductModule {}
