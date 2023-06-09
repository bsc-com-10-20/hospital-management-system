import { Injectable } from '@nestjs/common';
import { Patient } from './entities/patient.entity';
 import { Repository } from 'typeorm/repository/Repository';
 import { InjectRepository } from '@nestjs/typeorm';
 

@Injectable()
export class PatientService {
  

  

  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ){}

  async createPatient( newPatient: Patient) {
    const patient = this.patientRepository.create({
      ...newPatient, 
    });
       return this.patientRepository.save(patient);
    }
   
    async getPatientById(id: number) {
      return this.patientRepository.findOne({ where: { id }});
    }

    async updatePatient(id: number, newPatient: Patient): Promise<Patient> {
      const patient = await this.getPatientById(id);
      this.patientRepository.merge(patient, newPatient);
      return this.patientRepository.save(patient);
    }
  
    async deletePatient(id: number): Promise<void> {
      const existingPatient = await this.patientRepository.delete(id);
  
      if(!existingPatient){
          throw new Error(`Patient with id ${id} not found`);
        
         } 
         await this.patientRepository.delete(id);
        
  
    }
  }
