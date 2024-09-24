import { Request } from "express"
import { User } from "src/user/entities/user.entity"

export class AuthResquest extends Request {
    user: User;
}