import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HrmService } from './hrm.service';
import { Hrm } from './entities/hrm.entity';


@Controller('hrm')
export class hrmController {
  
  constructor(private readonly hrmService: HrmService) {}

  @Post()
  async createHrm(@Body() newHrm: Hrm): Promise<Hrm> {
    return this.hrmService.createHrm(newHrm);
  }

  @Get(':id')
  async getHrmById(@Param('id') id: number): Promise<Hrm> {
    return this.hrmService.getHrmById(id);
  }
  
  @Patch(':id')
  async updateHrm(@Param('id') id: number,
  @Body() newHrm: Hrm,
  ): Promise<Hrm>{
    return this.hrmService.updateHrm(id, newHrm);
  }

  @Delete(':id')
  async deleteHrm(@Param('id') id: number): Promise<void> {
    return this.hrmService.deleteHrm(id);
  }


}
