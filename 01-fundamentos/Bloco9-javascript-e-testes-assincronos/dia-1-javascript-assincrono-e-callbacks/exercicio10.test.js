beforeEach(() => console.log('1 - beforeEach')); // 1º
afterEach(() => console.log('1 - afterEach')); // 3º

test('', () => console.log('1 - test')); //2º

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // 1º
  afterEach(() => console.log('2 - afterEach')); // 3º

  test('', () => console.log('2 - test')); //2 º
});