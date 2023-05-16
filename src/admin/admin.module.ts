import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminController } from './admin.controller';
import { Admin } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [adminController],
  providers: [AdminService]
})
export class AdminModule {}

