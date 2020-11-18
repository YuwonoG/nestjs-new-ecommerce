import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ICreateParam } from 'src/global/interface/createParam.interface';
import { CreateParam } from 'src/global/param/create.param';
import { CreateService } from './create/create.service';
import { GetUser } from 'src/user/decorator/getUser.decorator';
import { User } from 'src/user/user.entity';
import { CreateProductDTO } from './dto/createProductDTO';
import { Product } from './product.entity';
import { IQueryParamByID } from 'src/global/interface/queryParam.interface';
import { QueryParamByID } from 'src/global/param/query.param';
import { QueryService } from './query/query.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductController {
    constructor(private readonly createService : CreateService
        , private readonly queryService : QueryService){}

    @Post()   
    @UseGuards(AuthGuard())
    async createProduct(@Body() createProductDTO : CreateProductDTO, @GetUser() user : User) : Promise<Product>{             
        const createParam : ICreateParam<CreateProductDTO> = new CreateParam(createProductDTO, user); 
        console.log(`ProductController - Create - ${JSON.stringify(createParam)}`);  

        return await this.createService.execute(createParam);
    }

    @Get()    
    async getProducts(@GetUser() user : User):Promise<Product | Product[] | void>{
        console.log(`ProductController - getProducts`);  
        const queryParamByID : IQueryParamByID = new QueryParamByID(null, user);
        return this.queryService.execute(queryParamByID);
    }

    @Get('/:id')
    async getProduct(@Param('id', ParseIntPipe) id: number, @GetUser() user : User):Promise<Product | Product[] | void>{
        const queryParamByID : IQueryParamByID = new QueryParamByID(id, user);
        console.log(`ProductController - getProduct - ${JSON.stringify(queryParamByID)}`);  
        return this.queryService.execute(queryParamByID);
    }

}
