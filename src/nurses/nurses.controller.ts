import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  import { Nurse } from './entities/nurse.entity';
  import { NursesService } from './nurses.service';

  @Controller('nurses')
export class NursesController {
  nurseRepository: any;
  constructor(private readonly nursesService: NursesService) {}

  @Post()
  async createNurse(@Body() newNurse: Nurse): Promise<Nurse>{
    return this.nursesService.createNurse(newNurse);
  }
 
 @Get(':id')
  async getNurseById(@Param('id') id: number) {
    return this.nursesService.getNurseById(+id);
  }

  @Patch(':id')
  async updateNurse(@Param('id') id: number,
  @Body() newNurse: Nurse,
  ): Promise<Nurse>{
    return this.nursesService.updateNurse(id, newNurse);
  }
  @Delete(':id')
  async deleteNurse(@Param('id') id: number): Promise<void> {
    return this.nursesService.deleteNurse(id);
  }




 
}