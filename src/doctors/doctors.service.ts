import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
 import { Repository } from 'typeorm/repository/Repository';
 
@Injectable()
export class DoctorsService {
 
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ){}
  

  async createDoctor( newDoctor: Doctor): Promise<Doctor> {
    const doctor = this.doctorRepository.create(newDoctor);
    return this.doctorRepository.save(doctor);
  
  }
  async getDoctorById(id: number): Promise<Doctor> {
    return this.doctorRepository.findOne({ where: { id }});
  }

 
  async updateDoctor(id: number, newDoctor: Doctor): Promise<Doctor> { 
    const doctor = await this.getDoctorById(id);
    this.doctorRepository.merge(doctor, newDoctor);
    return this.doctorRepository.save(doctor);
  }

  async deleteDoctor(id: number): Promise<void> {
    const existingDoctor = await this.doctorRepository.delete(id);

 if(!existingDoctor){
  throw new Error(`Doctor with id ${id} not found`);

 } 
 await this.doctorRepository.delete(id);


}
}
