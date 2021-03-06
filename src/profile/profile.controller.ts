import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,  UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/decorator/getUser.decorator';
import { User } from 'src/user/user.entity';
import { CreateProfileDTO } from "./dto/createProfile.dto";
import { UpdateProfileDTO } from "./dto/updateProfile.dto";
import { Profile } from './profile.entity';

import { CreateService } from './create/create.service';
import { ProfileUpdateService } from './update/profileUpdate.service';
import { ProfileDeleteService } from './delete/profileDelete.service';
import { Roles } from '../roles/roles.decorator';
import { ProfileQueryService } from './query/profileQuery.service';
import { QueryParamByID } from '../global/param/queryByID.param';
import { IQueryParamByID } from '../global/interface/iQueryParamByID.interface';
import { IUpdateParam } from '../global/interface/iUpdateParam.interface';
import { UpdateParam } from '../global/param/update.param';
import { CreateParam } from '../global/param/create.param';
import { ICreateParam } from '../global/interface/iCreateParam.interface';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('profile')
@Roles('admin' ,'dev')
 @UseGuards(AuthGuard(), RolesGuard)
export class ProfileController {
    constructor( 
        private readonly createService : CreateService
        , private readonly updateService : ProfileUpdateService
        , private readonly deleteService : ProfileDeleteService
        , private readonly queryService : ProfileQueryService
        )
    {}

    // @Get()
    // @Roles('dev')
    // @UseGuards(RolesGuard)
    // getHelloWorld(){
    //     return "Hello world!";
    // }

    @Post()    
    @Roles('admin')
    async createProfile(  @Body() createProfileDTO : CreateProfileDTO, @GetUser() user : User):Promise<Profile>{        
         
        const createParam : ICreateParam<CreateProfileDTO> = new CreateParam(createProfileDTO, user); 
        console.log(`ProfileController - Create - ${JSON.stringify(createParam)}`);  

        return await this.createService.execute(createParam);
        
    }

    @Patch('/:id')
    async updateProfile(@Param('id') id : number, @Body() updateProfileDTO : UpdateProfileDTO, @GetUser() user : User):Promise<Profile>{        
        updateProfileDTO.id = id;
        const updateParam : IUpdateParam<UpdateProfileDTO> = new UpdateParam(updateProfileDTO, user);
        console.log(`ProfileController - Update - ${JSON.stringify(updateParam)}`);  
        return await this.updateService.execute(updateParam);
    }

    @Delete('/:id')
    async deleteProfile(@Param('id', ParseIntPipe) id : number, @GetUser() user: User):Promise<void>{        
        const  deleteParam : IQueryParamByID<number> = new QueryParamByID<number>(id, user);
        console.log(`ProfileController - Delete - ${JSON.stringify(deleteParam)}`);  
        return this.deleteService.execute(deleteParam);
        
    }

    @Get()
    async getProfiles(@GetUser() user : User):Promise<void | Profile | Profile[]>{
        console.log(`ProfileController - getProfiles`);  
        const queryParamByID : IQueryParamByID<number> = new QueryParamByID<number>(null, user);
        return this.queryService.execute(queryParamByID);
    }

    @Get('/:id')
    async getProfile(@Param('id', ParseIntPipe) id: number, @GetUser() user : User):Promise<void | Profile | Profile[]>{
        const queryParamByID : IQueryParamByID<number> = new QueryParamByID<number>(id, user);
        console.log(`ProfileController - getProfile - ${JSON.stringify(queryParamByID)}`);  
        return this.queryService.execute(queryParamByID);
    }

/*
    @Get()
    async getProfiles(){
        console.log('Executing Controller - getProfiles');
        return this.profileService.getProfiles();
    }
    

    @Get('/:id')
    async getProfileById(@Param('id', ParseIntPipe) id :number){
        return this.profileService.getProfileById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createProfile(@Body() createProfileDTO : CreateProfileDTO, @GetUser() user : User) : Promise<Profile>{
        return await this.profileService.createProfile(createProfileDTO, user);
    }

    
    @Patch('/:id')
    async updateProfile(@Param('id', ParseIntPipe) id :number, @Body() updateProfileDTO : UpdateProfileDTO, @GetUser() user : User): Promise<Profile>{
        console.log("updateProfile - controller");
        console.log(updateProfileDTO);
        updateProfileDTO.id = id;
        return await this.profileService.updateProfile(updateProfileDTO, user);
    }

    @Delete('/:id')
    deleteProfile(@Param('id', ParseIntPipe) id : number, @GetUser() user: User):Promise<void>{
        console.log("deleteProfile - controller "+ user.uuid);
        return this.profileService.deleteProfile(id, user);
        
    }
*/

}
