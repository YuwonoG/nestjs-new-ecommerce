import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, ProfileModule, ProductModule],
  controllers : [],
  providers: [],
})
export class AppModule {}
