 import { Module } from '@nestjs/common';
 import { AccountantModule } from './accountant/accountant.module';
 import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NursesModule } from './nurses/nurses.module';
import { PatientsModule } from './patients/patients.module';
import { ReceptionistModule } from './receptionist/receptionist.module';
import { HrmModule } from './hrm/hrm.module';
import { DoctorsModule } from './doctors/doctors.module';
import { Patient } from './patients/entities/patient.entity';
import { Nurse } from './nurses/entities/nurse.entity';
import { Hrm } from './hrm/entities/hrm.entity';
import { Doctor } from './doctors/entities/doctor.entity';
import { Admin } from './admin/entities/admin.entity';
import { Accountant } from './accountant/entities/accountant.entity';
import { Receptionist } from './receptionist/entities/receptionist.entity';


 
@Module({
  imports: [ TypeOrmModule.forRoot({
  type: 'mysql',
  host: '',
  port: 3000,
  username: '',
  password: '',
  database: 'localhost',
  logging:false,
  migrations:[],
  subscribers:[],
  retryAttempts:6,
  autoLoadEntities:true,
  entities:[Patient,Nurse,Hrm,Doctor,Admin,Accountant,Receptionist],
  synchronize: false,
  }),

    AccountantModule, AdminModule, NursesModule, PatientsModule, ReceptionistModule, HrmModule, DoctorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
