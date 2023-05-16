import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
import { Accountant } from './entities/accountant.entity';
 import { Repository } from 'typeorm/repository/Repository';
 

 
 @Injectable()
 export class AccountantsService {
  
   constructor(
     @InjectRepository(Accountant)
     private readonly accountantRepository: Repository<Accountant>,
   ){}
 

   async createAccountant( newAccountant: Accountant): Promise<Accountant> {
    const Accountant = this.accountantRepository.create(newAccountant);
    return this.accountantRepository.save(Accountant);
   }
      
   async getAccountantById(id: number): Promise<Accountant> {
      return this.accountantRepository.findOne({ where: { id }})
  }

  async updateAccount(id: number, newAccountant: Accountant): Promise<Accountant> { 
    const accountant = await this.getAccountantById(id);
    this.accountantRepository.merge(accountant, newAccountant);
    return this.accountantRepository.save(accountant);
  }  

  async deleteAccountant(id: number): Promise<void> {
    const existingAccountant = await this.accountantRepository.delete(id);

    if(!existingAccountant){
      throw new Error(`Accountant with id ${id} not found`);
    
     } 
     await this.accountantRepository.delete(id);
    


 }
}
function getAccountantById(id: any, number: any) {
  throw new Error('Function not implemented.');
}
