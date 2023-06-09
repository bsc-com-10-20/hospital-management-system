import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';


@Controller('admin')
export class adminController {
 
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() newAdmin: Admin): Promise<Admin> {
    return this.adminService.createAdmin(newAdmin)
  }
  @Get(':id')
  async getAdminById(@Param('id') id: number): Promise<Admin> {
    return this.adminService.getAdminById(id);
  }

  @Patch(':id')
  async updateAdmin(@Param('id') id: number,
  @Body() newAdmin: Admin,
  ): Promise<Admin>{
    return this.adminService.updateAdmin(id, newAdmin);
  }
  @Delete(':id')
  async deleteAdmin(@Param('id') id: number): Promise<void> {
    return this.adminService.deleteAdmin(id);
  }
}
