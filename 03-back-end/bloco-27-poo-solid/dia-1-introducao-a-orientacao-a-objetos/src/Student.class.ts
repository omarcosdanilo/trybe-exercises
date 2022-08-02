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

}