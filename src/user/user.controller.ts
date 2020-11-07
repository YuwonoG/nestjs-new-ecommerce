import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { iAccessToken } from './jwt/jwt.accessToken.interface';
import { AuthenticationDTO } from './dto/authentication.dto';
import { SignUpDTO } from './dto/signUp.dto';
import { UserService } from './user.service';
import { GetUser } from './decorator/getUser.decorator';
import { User } from './user.entity';



@Controller('user')
export class UserController {

    constructor(private readonly userService : UserService
       ){
    }

    @Get()
    getHelloWorld(){
        return "Hello world!";
    }
    @Post('/signup')
    signUp(@Body(ValidationPipe) signUpDTO : SignUpDTO) : Promise<void>{        
        return this.userService.signUp(signUpDTO);
    }
    @Post('/signin')
    signIn(@Body(ValidationPipe) authenticationDTO : AuthenticationDTO):Promise<iAccessToken>{        
        return this.userService.signIn(authenticationDTO);
    }
    @Post('/test')
    @UseGuards(AuthGuard)
    test(@GetUser() user : User){
        console.log(user);
    }

}
