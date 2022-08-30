/* 2- Crie uma função que receba um array de números 
(crie uma segunda função para validar os dados dentro do array) 
e depois calcule a soma de  todos os valores dentro do array. 
Execute a função mostrando na tela o seguinte texto: 
'A soma dos valores do array é ${(resultado)}'. */

let numeros = [];
let limite = 0;
let somaValores = 0;

function validaDados() {
    limite = window.prompt(`digite a quantidade de elementos do ARRAY:`);
    limite = parseInt(limite);
    for (let i = 0; i < limite; i++) {
        numeros[i] = window.prompt(`digite o ${i + 1} valor`);
        document.writeln(numeros[i])
    }
    function somarValoresArray() {
        for (let i = 0; i < numeros.length; i++) {
            let numero = numeros[i]
            numero = parseInt(numero)
            somaValores += numero;
        }
        document.writeln(`<br>A soma dos valores do array é ${somaValores}`)
    }
    somarValoresArray();
}


