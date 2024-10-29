import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { StudentRepository } from "src/repositories/student-repository";

@Controller('/students') //Todos os métodos vão ser no /students
export class StudentController {
    
    constructor(
        private repository:StudentRepository
    ) {}

    @Get()
    async getAllStudents() {

    }

    @Post()
    async createStudent(@Body() body:CreateStudentDTO) {
        this.repository.createStudent(body);
    }

    @Put(':id')
    async updateStudent(@Param('id') id:string, @Body() body:any) {

    }

    @Delete(':id')
    async deleteStudent(@Param('id') id:string) {

    }

}