import { Log } from "src/log/entities/log.entity";

export class User {
    id?: string;
    email: string;
    password: string;
    username?: string;
    accessLevel?: number;
    isActive: boolean;
    logs?: Log[];
    createdAt?: Date;
    updatedAt?: Date;
}