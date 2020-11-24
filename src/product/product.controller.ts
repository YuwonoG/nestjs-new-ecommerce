import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ICreateParam } from 'src/global/interface/iCreateParam.interface';
import { CreateParam } from 'src/global/param/create.param';
import { CreateService } from './create/create.service';
import { GetUser } from 'src/user/decorator/getUser.decorator';
import { User } from 'src/user/user.entity';
import { CreateProductDTO } from './dto/createProduct.dto';
import { Product } from './product.entity';
import { IQueryParamByID } from 'src/global/interface/iQueryParamByID.interface';
import { QueryParamByID } from 'src/global/param/queryByID.param';
import { ProductQueryService } from './query/productQuery.service';
import { AuthGuard } from '@nestjs/passport';
import { IUpdateParam } from 'src/global/interface/iUpdateParam.interface';
import { UpdateParam } from 'src/global/param/update.param';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductUpdateService } from './update/productUpdate.service';
import { ProductDeleteService } from './delete/productDelete.service';

@Controller('products')
export class ProductController {
    constructor(
        private readonly createService : CreateService
        , private readonly updateService : ProductUpdateService
        , private readonly deleteService : ProductDeleteService

        , private readonly queryService : ProductQueryService){}

    @Post()   
    @UseGuards(AuthGuard())
    async createProduct(@Body() createProductDTO : CreateProductDTO, @GetUser() user : User) : Promise<Product>{             
        const createParam : ICreateParam<CreateProductDTO> = new CreateParam(createProductDTO, user); 
        console.log(`ProductController - Create - ${JSON.stringify(createParam)}`);  

        return await this.createService.execute(createParam);
    }

    @Patch('/:uuid')   
    @UseGuards(AuthGuard())
    async updateProduct(@Param('uuid', ParseUUIDPipe) uuid : string, @Body() updateProductDTO : UpdateProductDTO, @GetUser() user : User) : Promise<Product>{                     
        updateProductDTO.uuid = uuid;
        const updateParam : IUpdateParam<UpdateProductDTO> = new UpdateParam(updateProductDTO, user); 
        console.log(`ProductController - Update - ${JSON.stringify(updateParam)}`);  

        return await this.updateService.execute(updateParam);
    }

    @Delete('/:uuid')
    async deleteProduct(@Param('uuid', ParseUUIDPipe) uuid : string, @GetUser() user: User):Promise<void>{        
        const  deleteParam : IQueryParamByID<string> = new QueryParamByID<string>(uuid, user);
        console.log(`ProductController - Delete - ${JSON.stringify(deleteParam)}`);  
        return this.deleteService.execute(deleteParam);
        
    }

    @Get()    
    async getProducts(@GetUser() user : User):Promise<Product | Product[] | void>{
        console.log(`ProductController - getProducts`);  
        const queryParamByID : IQueryParamByID<string> = new QueryParamByID(null, user);
        return this.queryService.execute(queryParamByID);
    }

    @Get('/:id')
    async getProduct(@Param('id') id: string, @GetUser() user : User):Promise<Product | Product[] | void>{
        const queryParamByID : IQueryParamByID<string> = new QueryParamByID<string>(id, user);
        console.log(`ProductController - getProduct - ${JSON.stringify(queryParamByID)}`);  
        return this.queryService.execute(queryParamByID);
    }

}
