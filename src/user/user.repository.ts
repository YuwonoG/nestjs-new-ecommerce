import { AuthenticationCredentialDTO } from "src/user/dto/authentication-credential.dto";
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { v4 as uuidv4} from 'uuid';


@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authenticationCredentialDTO: AuthenticationCredentialDTO): Promise<void> {
        const { username, email, password } = authenticationCredentialDTO;
        const user = new User();

        const uuid = uuidv4();
        user.uuid = uuid;
        user.username = username;
        user.email = email;
        user.password = password;
        user.createdByUUID = uuid;
        user.updatedByUUID = uuid;

        await user.save();

    }
}
