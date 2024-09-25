import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwt: JwtService) {}
    
    login(user: User): UserToken  {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email
        }

        const jwtToken = this.jwt.sign(payload);

        return {
            access_token: jwtToken,
        };
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (user) {
            const isPasswordValid = await compare(password, user.password);
            if (isPasswordValid) return { ...user, password: undefined };
        }
        throw new Error('Email address or password provided is incorrect.');
    }

}
