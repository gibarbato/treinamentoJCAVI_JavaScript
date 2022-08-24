/* 6 - Faça um programa que leia 5 números e informe o maior número. */

function maiorNumero() {

    let limite = window.prompt('digite a quantidadede números para o teste')
    let maior = 0;
    let valorRecebido = 0;

    for (i = 1; i <= limite; i++) {
        valorRecebido = window.prompt(`${i}º valor: `);

        document.writeln(`${i}º número = ${valorRecebido} <br>`);

        if (valorRecebido > maior) {
            maior = valorRecebido;
        }

    }
    document.writeln(`O maior valor digitado da comparação de ${i-1} números foi --> ${maior}`);
}

maiorNumero();