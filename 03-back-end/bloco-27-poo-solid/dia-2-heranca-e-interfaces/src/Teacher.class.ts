import { Employee } from "./interfaces/employee.interface";
import Person from "./Person.class";

class Teacher extends Person implements Employee {
  private _subject
  public salary
  public registration: string
  public admissionDate: Date = new Date();

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this._name = name;
    this._birthDate = birthDate;
    this.salary = salary
    this._subject = subject;
    this.registration = this.generateRegistration();
  }

  get admission() {
    return this.admissionDate;
  }

  set admission(admissionDate: Date) {
    if (admissionDate > new Date()) {
      throw new Error('A data de admissão não pode ser no futuro');
    }

    this.admissionDate = admissionDate;
  }

  generateRegistration() {
    const part1 = Math.round(((Math.random() * 10000 + 1))).toString();
    const part2 = Math.round(((Math.random() * 10000 + 1))).toString();
    const part3 = Math.round(((Math.random() * 10000 + 1))).toString();
    const part4 = Math.round(((Math.random() * 10000 + 1))).toString();

    return part1 + part2 + part3 + part4;
  }
}

const teacher = new Teacher('Marcos', new Date('1994-09-27'), 10000, new Subject('POO'));