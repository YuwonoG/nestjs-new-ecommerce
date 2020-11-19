import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

import { ProductController } from './product.controller';

import { CreateService } from './create/create.service';
import { ProductUpdateService } from './update/productUpdate.service';
import { ProductQueryService } from './query/productQuery.service';
import { ProductDeleteService } from './delete/productDelete.service';

import { CreateRepository } from './create/create.repository';
import { ProductUpdateRepository } from './update/productUpdate.repository';
import { ProductQueryRepository } from './query/productQuery.repository';
import { ProductDeleteRepository } from './delete/productDelete.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CreateRepository, ProductUpdateRepository, ProductDeleteRepository, ProductQueryRepository]), UserModule],
  controllers: [ProductController],
  providers: [CreateService, ProductUpdateService, ProductDeleteService, ProductQueryService]

  
})
export class ProductModule {}
