/* 5 - Faça um programa que imprima na tela os números de 1 a 20 um ao lado do outro separado por "-" */

let limite = window.prompt("insira o limite: ");
let numero = 0;

limite = parseInt(limite);

for (let i = 1; i<=limite; i++){
    numero +=i;

    if(i < limite) {
        document.writeln(`${i} -`)
    } else {
        document.writeln(`${i}`)
    }
}