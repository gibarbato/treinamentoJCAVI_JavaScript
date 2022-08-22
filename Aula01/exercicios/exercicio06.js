/* 6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
a maior e a menor altura do grupo;
a média de altura;
o número de pessoas com mais de 1.81 de altura. */

let alturas = [160, 164, 181, 182, 190, 150, 178, 179, 184, 185, 169, 179, 182, 183, 172];

let maiorAltura = alturas[0];
let menorAltura = alturas[0];
let mediaAltura = 0;

for(let n = 0; n < alturas.length; n++) {
    const altura = alturas[n];
    const maior = alturas[n];
    const menor = alturas[n];

    mediaAltura += altura;

    if (maiorAltura < maior ){
        maiorAltura = maior;
    }
    if (menorAltura > menor ){
        menorAltura = menor;
    }


}


mediaAltura = (mediaAltura/alturas.length)/100;

document.writeln(`A altura média do grupo é ${mediaAltura}<br>`);
document.writeln(`A maior altura do grupo é ${maiorAltura/100}<br>`);
document.writeln(`A menor altura do grupo é ${menorAltura/100}<br>`);

