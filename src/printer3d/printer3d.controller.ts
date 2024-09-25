import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Printer3dService } from './printer3d.service';
import { CreatePrinter3dDto } from './dto/create-printer3d.dto';
import { UpdatePrinter3dDto } from './dto/update-printer3d.dto';

@Controller('printer3d')
export class Printer3dController {
  constructor(private readonly printer3dService: Printer3dService) {}

  @Post()
  create(@Body() createPrinter3dDto: CreatePrinter3dDto) {
    return this.printer3dService.create(createPrinter3dDto);
  }

  @Get()
  findAll() {
    return this.printer3dService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.printer3dService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrinter3dDto: UpdatePrinter3dDto) {
    return this.printer3dService.update(+id, updatePrinter3dDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.printer3dService.remove(+id);
  }
}
