import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { iAccessToken } from './jwt/jwt.accessToken.interface';
import { AuthenticationDTO } from './dto/authentication.dto';
import { SignUpDTO } from './dto/signUp.dto';
import { UserService } from './user.service';
import { GetUser } from './decorator/getUser.decorator';
import { User } from './user.entity';
import { IQueryParamByID } from 'src/global/interface/iQueryParamByID.interface';
import { QueryParamByID } from 'src/global/param/queryByID.param';
import { UserQueryService } from './query/userQuery.service';

import { IUpdateParam } from 'src/global/interface/iUpdateParam.interface';
import { UpdateParam } from 'src/global/param/update.param';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UserUpdateService } from './update/userUpdate.service';
import { ICreateParam } from 'src/global/interface/iCreateParam.interface';
import { CreateParam } from 'src/global/param/create.param';
import { UserCreateService } from './create/create.service';



@Controller('user')
export class UserController {

    constructor(
        private readonly userService : UserService        
        , private readonly queryService : UserQueryService
        , private readonly updateService : UserUpdateService
        , private readonly createService : UserCreateService        
        

       ){
    }

    // @Get()
    // getHelloWorld(){
    //     return "Hello world!";
    // }
    @Post('/signup')
    signUp(@Body(ValidationPipe) signUpDTO : SignUpDTO, @GetUser() user : User) : Promise<void>{        
        console.log('Signup controller');
        // const queryParamByID : IQueryParamByID<number> = new QueryParamByID<number>(1, user);
        // // console.log(`ProfileController - getProfile - ${JSON.stringify(queryParamByID)}`);  
        //  const profile = this.profileQueryService.execute(queryParamByID);

        // return this.userService.signUp(signUpDTO);
        
        const createParam : ICreateParam<SignUpDTO> = new CreateParam(signUpDTO, user); 
        console.log(`ProductController - Create - ${JSON.stringify(createParam)}`);  

        return this.createService.execute(createParam);
    }
    @Post('/signin')
    signIn(@Body(ValidationPipe) authenticationDTO : AuthenticationDTO):Promise<iAccessToken>{        
        return this.userService.signIn(authenticationDTO);
    }
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user : User){
        console.log(user);
    }


    @Get()
    getUsers(@GetUser() user : User):Promise<User[]>{
        console.log(`UserController - getUsers`);  
        const queryParamByID : IQueryParamByID<string> = new QueryParamByID<string>(null, user);
        return this.queryService.execute(queryParamByID);
    }

    @Patch('/:uuid')   
    @UseGuards(AuthGuard())
    async updateUser(@Param('uuid', ParseUUIDPipe) uuid : string, @Body() updateUserDTO : UpdateUserDTO, @GetUser() user : User) : Promise<User>{                     
        updateUserDTO.uuid = uuid;
        const updateParam : IUpdateParam<UpdateUserDTO> = new UpdateParam(updateUserDTO, user); 
        console.log(`UserController - Update - ${JSON.stringify(updateParam)}`);  

        return await this.updateService.execute(updateParam);
    }

}
