import { Injectable } from '@nestjs/common';
 import { Nurse } from './entities/nurse.entity';
 import { Repository } from 'typeorm/repository/Repository';
 import { InjectRepository } from '@nestjs/typeorm';
 
@Injectable()
export class NursesService {
  updateNurse(id: number, newNurse: Nurse): Nurse | PromiseLike<Nurse> {
    throw new Error('Method not implemented.');
  }
    constructor(
        @InjectRepository(Nurse)
        private readonly nurseRepository: Repository<Nurse>,
      ){}
      
  async createNurse( newNurse: Nurse): Promise<Nurse> {
    const nurse = this.nurseRepository.create(newNurse);
     return this.nurseRepository.save(nurse);
    }
 
  async getNurseById(id: number) {
    return this.nurseRepository.findOne({ where: { id }});  
}
async updateDoctor(id: number, newNurse: Nurse): Promise<Nurse> { 
    const nurse = await this.getNurseById(id);
    this.nurseRepository.merge(nurse, newNurse);
    return this.nurseRepository.save(nurse);
  }

  async deleteNurse(id: number): Promise<void> {
    const existingNurse = await this.nurseRepository.delete(id);

    if(!existingNurse){
        throw new Error(`Doctor with id ${id} not found`);
      
       } 
       await this.nurseRepository.delete(id);
      

  }
  }
