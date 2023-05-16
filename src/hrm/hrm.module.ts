import { Module } from '@nestjs/common';
import { HrmService } from './hrm.service';
import { hrmController } from './hrm.controller';
import { Hrm } from './entities/hrm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hrm])],
  controllers: [hrmController],
  providers: [HrmService]
})
export class HrmModule {}

