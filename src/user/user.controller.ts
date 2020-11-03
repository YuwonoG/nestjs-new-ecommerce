import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthenticationCredentialDTO } from './dto/authentication-credential.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private readonly userService : UserService){
    }

    @Get()
    getHelloWorld(){
        return "Hello world!";
    }
    @Post('/signup')
    signUp(@Body(ValidationPipe) authenticationCredentialDTO : AuthenticationCredentialDTO){        
        return this.userService.signUp(authenticationCredentialDTO);
    }

}
