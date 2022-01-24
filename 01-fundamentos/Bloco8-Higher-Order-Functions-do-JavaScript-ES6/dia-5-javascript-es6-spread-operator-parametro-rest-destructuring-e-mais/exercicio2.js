const sum = (...n) => n.reduce((acc, currValue) => acc + currValue);

console.log(sum(1, 2, 3, 4, 5, 6, 10, 20, 100));