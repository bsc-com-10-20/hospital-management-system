import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
import { Hrm } from './entities/hrm.entity';
 import { Repository } from 'typeorm/repository/Repository';
 

 @Injectable()
export class HrmService {
 
  constructor(
    @InjectRepository(Hrm)
    private readonly hrmRepository: Repository<Hrm>,
  ){}

  
  async createHrm( newHrm: Hrm): Promise<Hrm> {
    const Hrm = this.hrmRepository.create({
      ...newHrm});
    return this.hrmRepository.save(Hrm);
  
  }

  async getHrmById(id: number): Promise<Hrm> {
    return this.hrmRepository.findOne({ where: { id }});
  }
  async updateHrm(id: number, newHrm: Hrm): Promise<Hrm> { 
    const Hrm = await this.getHrmById(id);
    this.hrmRepository.merge(Hrm, newHrm);
    return this.hrmRepository.save(Hrm)
  }
  
  async deleteHrm(id: number): Promise<void> {
    const existingHrm = await this.hrmRepository.delete(id);

    if(!existingHrm){
      throw new Error(`Hrm with id ${id} not found`);
    
     } 
     await this.hrmRepository.delete(id);
    }}