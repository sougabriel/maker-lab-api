import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
    @IsString()
    eventName: string;

    @IsString()
    description: string;

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsOptional()
    @IsNumber()
    numberVisitors?: number;
}
