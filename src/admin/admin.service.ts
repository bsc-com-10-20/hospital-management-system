import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm/repository/Repository';
 


@Injectable()
export class AdminService {
 
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ){}

  async createAdmins( newAdmin: Admin): Promise<Admin> {
    const Admin = this.adminRepository.create(newAdmin);
    return this.adminRepository.save(Admin);
  
  }
  async getAdminById(id: number): Promise<Admin> {
    return this.adminRepository.findOne({ where: { id }});
  }
 

  async updateAdmin(id: number, newAdmin: Admin): Promise<Admin> { 
    const Admin = await this.getAdminById(id);
    this.adminRepository.merge(Admin, newAdmin);
    return this.adminRepository.save(Admin)
  }



    async deleteAdmin(id: number): Promise<void> {
      const existingAdmin = await this.adminRepository.delete(id);

      if(!existingAdmin){
        throw new Error(`Admin with id ${id} not found`);
      
       } 
       await this.adminRepository.delete(id);
      
  

}}
