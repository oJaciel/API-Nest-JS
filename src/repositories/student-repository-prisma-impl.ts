import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { StudentRepository } from "./student-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";

@Injectable()
export class StudentRepositoryPrismaImpl implements StudentRepository {

    constructor(
        private prismaService: PrismaService
    ) { }

    getAllStudents(): Promise<CreateStudentDTO[]> {
        throw new Error("Method not implemented.");
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

    updateStudent(id: string, body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    deleteStudent(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}