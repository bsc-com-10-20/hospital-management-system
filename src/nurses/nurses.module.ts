import { Module } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { NursesController } from './nurses.controller';
import { Nurse } from './entities/nurse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Nurse])],
  controllers: [NursesController],
  providers: [NursesService]
})
export class NursesModule {}
