import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
 import { Doctor } from './entities/doctor.entity';

@Controller('doctors')
export class DoctorsController {
  doctorRepository: any;
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  async createDoctor(@Body() newDoctor: Doctor): Promise<Doctor> {
    return this.doctorsService.createDoctor(newDoctor);
  }

  @Get(':id')
  async getDoctorById(@Param('id') id: number): Promise<Doctor> {
    return this.doctorsService.getDoctorById(id);
  }

  

  @Patch(':id')
  async updateDoctor(@Param('id') id: number,
  @Body() newDoctor: Doctor,
  ): Promise<Doctor>{
    return this.doctorsService.updateDoctor(id, newDoctor);
  }

  @Delete(':id')
  async deleteDoctor(@Param('id') id: number): Promise<void> {
    return this.doctorsService.deleteDoctor(id);
  }
}
