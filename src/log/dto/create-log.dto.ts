import { IsDate, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateLogDto {
    user: User;

    @IsString()
    userId: string;
    
    @IsString()
    activity: string;
    
    @IsDate()
    executedAt: Date;
}
