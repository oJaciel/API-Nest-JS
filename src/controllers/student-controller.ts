import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { UpdateStudentDTO } from "src/dtos/update-student-dto";
import { StudentRepository } from "src/repositories/student-repository";

@Controller('/students') //Todos os métodos vão ser no /students
export class StudentController {
    
    constructor(
        private repository:StudentRepository
    ) {}

    @Get()
    async getAllStudents() {
        return this.repository.getAllStudents();
    }

    @Post()
    async createStudent(@Body() body:CreateStudentDTO) {
        return this.repository.createStudent(body);
    }

    @Put(':id')
    async updateStudent(@Param('id') id:string, @Body() body:UpdateStudentDTO) {
        await this.repository.updateStudent(id, body);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id:string) {
        await this.repository.deleteStudent(id);
    }

}