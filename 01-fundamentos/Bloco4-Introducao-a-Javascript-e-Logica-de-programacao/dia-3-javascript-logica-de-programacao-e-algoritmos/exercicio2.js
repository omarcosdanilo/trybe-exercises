let n = 5;
let aux = '';

for (i = 1; i <= n; i += 1){
    for (j = 0; j < i ; j += 1 ){
        aux += '*';
    }
    console.log(aux);
    aux = '';
}