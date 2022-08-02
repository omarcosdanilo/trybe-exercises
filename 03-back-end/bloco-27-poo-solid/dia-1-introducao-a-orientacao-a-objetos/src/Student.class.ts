import Grade from "./interfaces/grade.interface";
import WorkGrade from "./interfaces/workGrade.interface";

class Student {
  registration: number;
  name: string;
  grades: Grade;
  workGrades: WorkGrade

  constructor(
    registration: number,
    name: string,
    grades: Grade,
    workGrades: WorkGrade
    ) {
      this.registration = registration;
      this.name = name;
      this.grades = grades;
      this.workGrades = workGrades;
    };

    sum() {
      const {grade1, grade2, grade3, grade4} = this.grades;
      console.log('Soma das notas:', grade1 + grade2 + grade3 + grade4)
    };

    media() {
      const {grade1, grade2, grade3, grade4} = this.grades;

      const media = (grade1 + grade2 + grade3 + grade4) / 4;

      console.log(`Média: ${media}`);
    };
}

const marcos = new Student(
  1, 'Marcos', {grade1: 10, grade2: 7, grade3: 9, grade4: 8}, {grade1: 9, grade2: 9}
  )

marcos.sum();
marcos.media();