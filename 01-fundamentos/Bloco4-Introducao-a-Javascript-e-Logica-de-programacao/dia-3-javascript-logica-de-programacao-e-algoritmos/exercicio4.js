n = 5;

let aux = "";

for (i = 1; i < n - 1; i += 1) {
  for (j = 0; j < n - i; j += 1) {
    aux += " ";
  }
  for (k = 0; k < 2 * i - 1; k += 1) {
    aux += "*";
  }

  aux += "\n";
}

console.log(aux);
