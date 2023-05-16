import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientService } from './patients.service';
import { Patient } from './entities/patient.entity';


@Controller('patients')
export class PatientsController {
  patientRepository: any;
  patientsService: any;
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async createPatient(@Body() newPatient: Patient): Promise<Patient>{
    return this.patientsService.createPatient(newPatient);
  }

 
  @Get(':id')
  async getPatientById(@Param('id') id: number) {
    return this.patientsService.getPatientById(+id);
 }

 @Patch(':id')
 async updatePatient(@Param('id') id: number,
 @Body() newPatient: Patient,
 ): Promise<Patient>{
   return this.patientsService.updatePatient(id, newPatient);
 }
 @Delete(':id')
 async deletePatient(@Param('id') id: number): Promise<void> {
   return this.patientService.deletePatient(id);
 }
 
 }
