let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maiorNumero = arrays[0];
let count = 0;
let somaPrimo = 0;
let somaPar = 0;

for (let i = 0; i < arrays.length; i++) {
    const maior = arrays[i];

    if (maiorNumero < maior) {
        maiorNumero = maior;
    }

}
document.writeln(`Maior valor ${maiorNumero}<br>`);

for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i];

    if (arr % 2 == 0) {
        somaPar = somaPar + arr;
    }

    for (let j = 1; j <= maiorNumero; j++) {
    
    
        if (arr % j == 0) {
            count = count + 1;
            
        }
    }

    if(count == 2) {
        document.writeln(`ARR - ${arr} - contador - ${count} - primo<br>`);
        count = 0;
        somaPrimo = somaPrimo + arr;
    } else {
        document.writeln(`ARR - ${arr} - contador - ${count}<br>`);
        count = 0;
    }   
}
    document.writeln(`Soma dos valores dos números pares = ${somaPar}<br>`)
    document.writeln(`Soma dos valores dos números primos = ${somaPrimo}`)