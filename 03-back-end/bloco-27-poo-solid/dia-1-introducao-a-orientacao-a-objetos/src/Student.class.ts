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