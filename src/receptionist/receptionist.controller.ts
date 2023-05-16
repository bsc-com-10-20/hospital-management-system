import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceptionistService } from './receptionist.service';
import { Receptionist } from './entities/receptionist.entity';


@Controller('receptionist')
export class ReceptionistController {
  recetionistRepository: any;
  receptionistService: any;
  constructor(private readonly receptionistsService: ReceptionistService) {}

  @Post()
  async createReceptionist(@Body() newReceptionist: Receptionist): Promise<Receptionist>{
    return this.receptionistService.createReceptionist(newReceptionist);
  }

 
  @Get(':id')
  async getReceptionistById(@Param('id') id: number) {
    return this.receptionistService.getReceptionistById(+id);
 }

 
 @Patch(':id')
 async updateReceptionist(@Param('id') id: number,
 @Body() newReceptionist: Receptionist,
 ): Promise<Receptionist>{
   return this.receptionistService.updateReceptionist(id, newReceptionist);
 }

 @Delete(':id')
 async deletereceptionist(@Param('id') id: number): Promise<void> {
   return this.receptionistService.deleteReceptionist(id);
 }
}
