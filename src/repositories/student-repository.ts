import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { UpdateStudentDTO } from "src/dtos/update-student-dto";

export abstract class StudentRepository {
    abstract getAllStudents() : Promise<CreateStudentDTO[]>

    abstract createStudent(body:CreateStudentDTO) : Promise<any>

    abstract updateStudent(id:string, body:UpdateStudentDTO) : Promise<any>

    abstract deleteStudent(id:string) : Promise<void>
}