import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { StudentRepository } from './repositories/student-repository';
import { StudentRepositoryPrismaImpl } from './repositories/student-repository-prisma-impl';
import { StudentController } from './controllers/student-controller';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [
    PrismaService, 
    {
      provide:StudentRepository,
      useClass: StudentRepositoryPrismaImpl
    }
  ],
})
export class AppModule {}
