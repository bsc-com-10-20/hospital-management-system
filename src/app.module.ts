 import { Module } from '@nestjs/common';
 import { AccountantModule } from './accountant/accountant.module';
 import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NursesModule } from './nurses/nurses.module';
import { PatientsModule } from './patients/patients.module';
import { ReceptionistModule } from './receptionist/receptionist.module';
import { HrmModule } from './hrm/hrm.module';
import { DoctorsModule } from './doctors/doctors.module';
  
@Module({
  imports: [ 
  TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port:   3306,
  username: 'root',
  password: '',
  database: 'hospital_db',
  logging:false,
  migrations:[],
  subscribers:[],
  retryAttempts:6,
  autoLoadEntities:true,
    synchronize: false,
  }),

    AccountantModule, AdminModule, NursesModule, PatientsModule, ReceptionistModule, HrmModule, DoctorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
