class Subject {
   private _name;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
    this._name = newName;
  }
}

const materia = new Subject('Física');

console.log(materia.name);

materia.name = 'Matemática';

console.log(materia.name);