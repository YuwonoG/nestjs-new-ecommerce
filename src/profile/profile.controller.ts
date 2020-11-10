import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/decorator/getUser.decorator';
import { User } from 'src/user/user.entity';
import { CreateProfileDTO } from "./dto/createProfileDTO";
import { UpdateProfileDTO } from "./dto/updateProfileDTO";
import { Profile } from './profile.entity';

import { CreateService } from './create/create.service';
import { UpdateService } from './update/update.service';
import { DeleteService } from './delete/delete.service';
import { DeleteProfileDTO } from './dto/deleteProfileDTO';

@Controller('profile')
@UseGuards(AuthGuard())
export class ProfileController {
    constructor( 
        private readonly createService : CreateService
        , private readonly updateService : UpdateService
        , private readonly deleteService : DeleteService
        )
    {}
    @Post()
    async createProfile(@Body() createProfileDTO : CreateProfileDTO, @GetUser() user : User):Promise<Profile>{        
        console.log("ProfileController - Create");        
        return await this.createService.execute(createProfileDTO, user);
        
    }

    @Patch('/:id')
    async updateProfile(@Param('id') id : number, @Body() updateProfileDTO : UpdateProfileDTO, @GetUser() user : User):Promise<Profile>{        
        console.log("ProfileController - Update");        
        updateProfileDTO.id = id;
        return await this.updateService.execute(updateProfileDTO, user);
    }

    @Delete('/:id')
    deleteProfile(@Param('id', ParseIntPipe) id : number, @GetUser() user: User):Promise<void>{
        console.log("ProfileController - Delete");  
        const  deleteProfileDTO = new DeleteProfileDTO();
        deleteProfileDTO.id = id.toString();
        return this.deleteService.execute(deleteProfileDTO, user);
        
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
