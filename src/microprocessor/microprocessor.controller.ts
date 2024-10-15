import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MicroprocessorService } from './microprocessor.service';
import { CreateMicroprocessorDto } from './dto/create-microprocessor.dto';
import { UpdateMicroprocessorDto } from './dto/update-microprocessor.dto';

@Controller('microprocessor')
export class MicroprocessorController {
  constructor(private readonly microprocessorService: MicroprocessorService) {}

  @Post()
  create(@Body() createMicroprocessorDto: CreateMicroprocessorDto) {
    return this.microprocessorService.create(createMicroprocessorDto);
  }

  @Get()
  findAll() {
    return this.microprocessorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.microprocessorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMicroprocessorDto: UpdateMicroprocessorDto) {
    return this.microprocessorService.update(id, updateMicroprocessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microprocessorService.remove(id);
  }
}
