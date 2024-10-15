import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntryService } from './entry.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post()
  create(@Body() createEntryDto: CreateEntryDto) {
    return this.entryService.create(createEntryDto);
  }

  @Get()
  findAll() {
    return this.entryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto, @CurrentUser() user: User) {
    if (user.accessLevel === 1) {
      return this.entryService.update(+id, updateEntryDto);
    }
  }

  @Patch()
  updateAll(@Body() updateEntryDto: UpdateEntryDto, @CurrentUser() user: User) {
    if (user.accessLevel === 1) {
      return this.entryService.updateAll(updateEntryDto);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: User) {
    if (user.accessLevel === 1) {
      return this.entryService.remove(+id);
    }
  }

  @Delete()
  removeAll(@CurrentUser() user: User) {
    if (user.accessLevel === 1) {
      return this.entryService.removeAll();
    }
  }
}
