import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from 'typeorm';


@Controller('admin')
export class adminController {
  adminRepository: any;
  adminsService: any;
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() newAdmin: Admin): Promise<Admin> {
    return this.adminsService.createAdmin(newAdmin);
  }
  @Get(':id')
  async getAdminById(@Param('id') id: number): Promise<Admin> {
    return this.adminsService.getAdminById(id);
  }

  @Patch(':id')
  async updateAdmin(@Param('id') id: number,
  @Body() newAdmin: Admin,
  ): Promise<Admin>{
    return this.adminsService.updateAdmin(id, newAdmin);
  }
  @Delete(':id')
  async deleteAdmin(@Param('id') id: number): Promise<void> {
    return this.adminService.deleteAdmin(id);
  }
}
