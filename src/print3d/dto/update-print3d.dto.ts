import { PartialType } from '@nestjs/mapped-types';
import { CreatePrint3dDto } from './create-print3d.dto';

export class UpdatePrint3dDto extends PartialType(CreatePrint3dDto) {}
