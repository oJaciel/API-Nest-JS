import { IsNotEmpty, Length } from "class-validator";

export class CreateStudentDTO {

    @IsNotEmpty({
        message: 'O nome é obrigatório'
    })
    @Length(3, 100)
    name?: string;

    @IsNotEmpty({
        message: 'O e-mail é obrigatório'
    })
    email?: string;

    
    age?: number;
}