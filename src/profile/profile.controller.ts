import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/decorator/getUser.decorator';
import { User } from 'src/user/user.entity';
import { CreateProfileDTO } from './dto/createProfileDTO';

import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(
        private readonly profileService : ProfileService
    ){}

    @Get()
    async getProfiles(){
        console.log('Executing Controller - getProfiles');
        return this.profileService.getProfiles();
    }
    

    @Get('/:id')
    async getProfileById(@Param('id', ParseIntPipe) id :number){
        return this.profileService.getProfileById(id);
    }

    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    @Post()
    async createProfile(@Body() createProfileDTO : CreateProfileDTO, @GetUser() user : User){
        return this.profileService.createProfile(createProfileDTO, user);
    }
}
