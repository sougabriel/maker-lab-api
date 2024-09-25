import { User } from "src/user/entities/user.entity"

export class Log {
    id?: number;
    user: User;
    userId: string;
    activity: string;
    executedAt: Date;
}
