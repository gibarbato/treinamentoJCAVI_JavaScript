//7 - Faça um programa que leia 5 números e informe a soma e a média dos números.

function somaMedia() {

    let limite = window.prompt('digite a quantidadede números para o teste')
    let valorRecebido = 0;
let soma = 0;
let media = 0;

    for (i = 1; i <= limite; i++) {
        valorRecebido = window.prompt(`${i}º valor: `);

        document.writeln(`${i}º número = ${valorRecebido} <br>`);
        valorRecebido = parseInt(valorRecebido);

        soma = soma + valorRecebido;

    }
media = soma/limite;
    document.writeln(`Soma dos valores inseridos = ${soma}<br>`);
document.writeln(`Média dos valores inseridos = ${media}`);
}

somaMedia();