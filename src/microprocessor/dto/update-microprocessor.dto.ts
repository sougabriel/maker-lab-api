import { PartialType } from '@nestjs/mapped-types';
import { CreateMicroprocessorDto } from './create-microprocessor.dto';

export class UpdateMicroprocessorDto extends PartialType(CreateMicroprocessorDto) {}
