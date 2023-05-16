import { Module } from '@nestjs/common';
import { AccountantsService } from './accountant.service';
import { AccountantController } from './accountant.controller';
import { Accountant } from './entities/accountant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Accountant])],
  controllers: [AccountantController],
  providers: [AccountantsService]
})
export class AccountantModule {}

