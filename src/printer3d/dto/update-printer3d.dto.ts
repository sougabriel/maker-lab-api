import { PartialType } from '@nestjs/mapped-types';
import { CreatePrinter3dDto } from './create-printer3d.dto';

export class UpdatePrinter3dDto extends PartialType(CreatePrinter3dDto) {}
