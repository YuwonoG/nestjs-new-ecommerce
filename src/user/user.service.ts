import { InjectRepository } from '@nestjs/typeorm';
import { AuthenticationCredentialDTO } from 'src/user/dto/authentication-credential.dto';
import { UserRepository } from './user.repository';


export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepositorySignUp: UserRepository  
        ){}

        async signUp(authenticationCredentialDTO : AuthenticationCredentialDTO){
             return this.userRepositorySignUp.signUp(authenticationCredentialDTO);
        }

}
