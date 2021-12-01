let n = 5;

let aux = "";

for (let i = 1; i <= n; i += 1) {
  for (let j = 0; j < n - i; j += 1) {
    aux += " ";
  }
  for (let k = 0; k < i; k += 1) {
    aux += "*";
  }
  aux += "\n";
}
console.log(aux);