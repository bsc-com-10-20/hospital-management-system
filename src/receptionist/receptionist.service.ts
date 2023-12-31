import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receptionist } from './entities/receptionist.entity';
import { Repository } from 'typeorm';

 
 @Injectable()
 export class ReceptionistService {
   constructor( @InjectRepository(Receptionist)
   private readonly receptionistRepository: Repository<Receptionist>,){}

  async createReceptionist( newReceptionist: Receptionist): Promise<Receptionist> {
    const receptionist = this.receptionistRepository.create({
      ...newReceptionist});

    return this.receptionistRepository.save(receptionist);
 

  }

  async getReceptionistById(id: number): Promise<Receptionist> {
    return this.receptionistRepository.findOne({ where: { id }});
  }

    
  async updateReceptionist(id: number, newReceptionist: Receptionist): Promise<Receptionist> { 
    const receptionist = await this.getReceptionistById(id);
    this.receptionistRepository.merge(receptionist, newReceptionist);
    return this.receptionistRepository.save(receptionist);
  }

async deleteReceptionist(id: number): Promise<void> {
  const existingReceptionist = await this.receptionistRepository.delete(id);

  if(!existingReceptionist){
      throw new Error(`Receptionist with id ${id} not found`);
    
     } 
     await this.receptionistRepository.delete(id);
    

}
}