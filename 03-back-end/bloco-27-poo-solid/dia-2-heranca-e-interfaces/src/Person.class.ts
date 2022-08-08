export default class Person {
  constructor(
    protected _name: string,
    protected _birthDate: Date,
  ) {}

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    };

    this._name = newName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(newBirthDate: Date) {
    if (newBirthDate > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }

    if (newBirthDate.getFullYear() < this._birthDate.getFullYear() - 120) {
      throw new Error('A pessoa não pode ter mais de 120 anos');
    }

    this._birthDate = newBirthDate;
  }
}
