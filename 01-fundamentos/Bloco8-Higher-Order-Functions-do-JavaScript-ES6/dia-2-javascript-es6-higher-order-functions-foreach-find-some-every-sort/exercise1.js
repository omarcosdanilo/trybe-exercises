const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947(array) {
  return array.find((person) => person.author.birthYear === 1947)
}
// console.log(authorBornIn1947(books).author.name);

// ================= ==========================
// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook = 'livro qualquer';
  
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name
    }
  })
  return nameBook;
}

// console.log(smallerName());

// =================== ==========================
// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  return books.find((book) => {
    return book.name.length === 26
  })
}
console.log(getNamedBook());