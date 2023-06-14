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
  type: 'postgres',
  host: 'dpg-ci4li7p5rnupbq71rf9g-a',
  port:   5432,
  username: 'hospital_hx5k_user',
  password: 'WpbXOl74aLmH7ByE95j2fhkKzzcK3hal',
  database: 'hospital_hx5k',
  // logging:false,
  // migrations:[],
  // subscribers:[],
  // retryAttempts:6,
  autoLoadEntities:true,
    synchronize: true,
  }),

    AccountantModule, AdminModule, NursesModule, PatientsModule, ReceptionistModule, HrmModule, DoctorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
