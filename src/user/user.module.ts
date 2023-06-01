import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { User } from '../models/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { TransactionInterceptor } from 'src/interceptors/transaction.interceptor';
import { ResponseService } from 'src/common-service/response.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ResponseService,
    TransactionInterceptor,
    { provide: 'SEQUELIZE', useExisting: Sequelize },
  ],
})
export class UserModule {}
