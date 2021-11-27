const valorCusto = 5;
const valorCustoTotal = valorCusto + (valorCusto*0.2)
const valorVenda = 100;

let lucro = valorVenda - valorCustoTotal

if (valorCusto < 0) {
    console.log('O valor do custo não pode ser menor que zero ');
}
else if (valorVenda < 0) {
    console.log('O valor de venda não pode ser menor que zero')
}
else {

    console.log(lucro * 1000);
}
