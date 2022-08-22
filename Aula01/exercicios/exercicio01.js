//1.  Faça um programa que entre com três números, faça a média aritmética e mostre o resultado. 

const numeros = [8, 9, 6, 10];
let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    soma = soma + numero;

    };

const media = soma / numeros.length;
document.writeln(`Média:${media}`);

// resolução sala de aula 
/*
let a = 10;
let b = 20;
let c = 30;

alert((a+b+c)/3);

const numeros = [10, 20, 30, 40];

*/