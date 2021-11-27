const a = 90;
const b = 90;
const c = -10;

if ( a + b + c === 180) {
    console.log('true');
} 
else if (a < 0 || b < 0 || c < 0){
    console.log('O valor não pode ser negativo')
}
else {
    console.log('false')
}