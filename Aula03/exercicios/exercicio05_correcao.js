/* 5- Crie uma função que receba um array de números (Valide os dados dentro do array, 
    reaproveite a função criada no exercício 1) e depois calcule a média de todos os 
    valores dentro do array. Execute a função mostrando na tela o seguinte texto: 
    'A média dos valores do array é ${(resultado)}'. */

function calcularMedia(numeros) {
    if(validarArrayNumerico(numeros)){
        let total = 0;
        let media = 0
        numeros.forEach(numero => {
            total += numero;
        });
    
        media = (total / numeros.length);
        document.writeln(`Média Array - ${media}<br>`);
        
    } else {
        document.writeln('Valores inválidos no array');
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


calcularMedia([10, 20, 30]);
calcularMedia([10, 20, '30']);