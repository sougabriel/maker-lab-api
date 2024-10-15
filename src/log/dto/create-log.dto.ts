import { IsDate, IsString } from "class-validator";

export class CreateLogDto {
    @IsString()
    userId: string;
    
    @IsString()
    activity: string;
    
    @IsDate()
    executedAt: Date;
}
