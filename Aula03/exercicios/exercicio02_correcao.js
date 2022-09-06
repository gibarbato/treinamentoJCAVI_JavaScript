/* 2- Crie uma função que receba um array de números 
(crie uma segunda função para validar os dados dentro do array) 
e depois calcule a soma de  todos os valores dentro do array. 
Execute a função mostrando na tela o seguinte texto: 
'A soma dos valores do array é ${(resultado)}'. */

//ARRAY - coleção de objetos, normalmente do mesmo tipo



function sumValuesArray(numeros) {

    const isValido = validarArrayNumerico(numeros)
    if (isValido) {
        let total = 0;

        for (let i = 0; i < numeros.length; i++) {
            const numero = numeros[i];
            total += numero;
        }
        document.writeln(`A soma dos valores do array é ${total}<br>`);
    } else {
        document.writeln(`Array só pode conter números...<br>`);
    }
}

function validarArrayNumerico(numeros) {
    let isValido = true;  // variáveis booleanas por convenção é utilizado o IS na frente...

    numeros.forEach(numero => {
        if (typeof numero != "number") {
            isValido = false;
        }
    });

    return isValido
}


sumValuesArray([10, 20, 30])
document.writeln('Chamando a função pela segunda vez...<br>')
sumValuesArray([40, 25, 'azul'])


