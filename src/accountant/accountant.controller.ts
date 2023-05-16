import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountantsService } from './accountant.service';
 import { Accountant } from './entities/accountant.entity';


 @Controller('accountant')
 export class AccountantController {
   accountantRepository: any;
   constructor(private readonly accountantsService: AccountantsService) {}
 
   @Post()
   async createAccountant(@Body() newAccountant: Accountant): Promise<Accountant> {
     return this.accountantsService.createAccountant(newAccountant);
   }
 

   @Get(':id')
   async getAccountantById(@Param('id') id: number): Promise<Accountant> {
     return this.accountantsService.getAccountantById(id);
   }

   @Patch(':id')
   async updateAccountant(@Param('id') id: number,
   @Body() newAccountant: Accountant,
   ): Promise<Accountant>{
     return this.accountantsService.updateAccount(id, newAccountant);
   }

   @Delete(':id')
   async deleteAccountant(@Param('id') id: number): Promise<void> {
     return this.accountantsService.deleteAccountant(id);
   }
}
