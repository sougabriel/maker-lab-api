import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Print3dService } from './print3d.service';
import { CreatePrint3dDto } from './dto/create-print3d.dto';
import { UpdatePrint3dDto } from './dto/update-print3d.dto';

@Controller('print3d')
export class Print3dController {
  constructor(private readonly print3dService: Print3dService) {}

  @Post()
  create(@Body() createPrint3dDto: CreatePrint3dDto) {
    return this.print3dService.create(createPrint3dDto);
  }

  @Get()
  findAll() {
    return this.print3dService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.print3dService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrint3dDto: UpdatePrint3dDto) {
    return this.print3dService.update(id, updatePrint3dDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.print3dService.remove(id);
  }
}
