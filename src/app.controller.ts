import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';

@Controller('/alunos') //Todas as rotas vão ser no /alunos
export class AppController {
  //Construtor instanciando o appService e o banco de dados
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Criando um novo registro
  @Post()
  async createStudent(@Body() body: any) {
    //O body capta o que vier no corpo da requisição
    const student = await this.prisma.students.create({
      data: {
        id: randomUUID(), //ID é gerado aleatoriamente
        name: body.name,
        email: body.email,
        age: body.age
      }
    })
    return {
      message: "Aluno inserido com sucesso!",
      data: student
    }
  }


}
