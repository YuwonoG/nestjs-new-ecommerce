import { Module } from '@nestjs/common';
import { CreateRepository } from './create/create.repository';
import { ProductController } from './product.controller';
import { CreateService } from './create/create.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryService } from './query/query.service';
import { QueryRepository } from './query/query.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  imports : [TypeOrmModule.forFeature([CreateRepository, QueryRepository]), UserModule],
  controllers: [ProductController],
  providers: [CreateService, QueryService]

  
})
export class ProductModule {}
