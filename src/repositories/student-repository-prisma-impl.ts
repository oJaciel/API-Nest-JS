import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { StudentRepository } from "./student-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";
import { UpdateStudentDTO } from "src/dtos/update-student-dto";

@Injectable()
export class StudentRepositoryPrismaImpl implements StudentRepository {

    constructor(
        private prismaService: PrismaService
    ) { }

    async getAllStudents(): Promise<CreateStudentDTO[]> {
        return await this.prismaService.students.findMany()
    }

    async createStudent(body: CreateStudentDTO): Promise<any> {
        const student = await this.prismaService.students.create({
            data: {
                id: randomUUID(),
                name: body.name,
                email: body.email,
                age: body.age,
            }
        })

        return {
            'message': 'Aluno inserido com sucesso',
            'data': student
        }

    }

    async updateStudent(id: string, body: UpdateStudentDTO): Promise<any> {
        await this.prismaService.students.update({
            where: {
                id: id
            },
            data: {
                name: body.name,
                email: body.email,
                age: body.age
            }
        })
    }

    async deleteStudent(id: string): Promise<void> {
        await this.prismaService.students.delete({
            where: {
                id: id
            }
        })
    }

}