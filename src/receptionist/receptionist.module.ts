import { Module } from '@nestjs/common';
import { ReceptionistService } from './receptionist.service';
import { ReceptionistController } from './receptionist.controller';
import { Receptionist } from './entities/receptionist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Receptionist])],
  controllers: [ReceptionistController],
  providers: [ReceptionistService]
})
export class ReceptionistModule {}
