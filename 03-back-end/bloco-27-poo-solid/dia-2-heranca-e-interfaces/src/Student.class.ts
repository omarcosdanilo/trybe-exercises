import Person from './Person.class';

// - enrollment: matrícula da pessoa estudante
// - examsGrades: notas de provas
// - worksGrades: notas de trabalhos
class Student extends Person {
  protected _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    protected _name: string,
    protected _birthDate: Date,
  ) {
    super(_name, _birthDate)
    this._enrollment = this.generateEnrollment();
  };

  get name() {
    return this._name
  }

  get birthDate() {
    return this._birthDate;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    if (grades.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    };

    this._examsGrades = grades;
  }

  get worksGrades() {
    return this._worksGrades;
  }
  
  set worksGrades(grades: number[]) {
    if (grades.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    };

    this._worksGrades = grades;
  }
  sumGrades(): string {
    const examsGradesSum = this._examsGrades.reduce((acc, currValue) => acc + currValue);
    const worksGradesSum = this._worksGrades.reduce((acc, currValue) => acc + currValue);

    return `
      Soma dos exames: ${examsGradesSum};
      Soma dos trabalhos: ${worksGradesSum};
      `
  }

  sumAverageGrade(): string {
    const examsGradesSum = this._examsGrades.reduce((acc, currValue) => acc + currValue);
    const worksGradesSum = this._worksGrades.reduce((acc, currValue) => acc + currValue);

    return `
      Média das notas de provas: ${examsGradesSum / this._examsGrades.length}
      Média das notas de trabalho: ${worksGradesSum / this._worksGrades.length}
    `
  }
  
  generateEnrollment() {
    const part1 = Math.round(((Math.random() * 10000 + 1))).toString();
    const part2 = Math.round(((Math.random() * 10000 + 1))).toString();
    const part3 = Math.round(((Math.random() * 10000 + 1))).toString();
    const part4 = Math.round(((Math.random() * 10000 + 1))).toString();

    return part1 + part2 + part3 + part4;
  }

}

const student = new Student('Marcos', new Date());

student.examsGrades = [1, 2, 3, 4];
student.worksGrades = [1, 2];
console.log(student);