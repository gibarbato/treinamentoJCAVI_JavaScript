/* 1- Crie uma função que receba dois números como parâmetro, 
retorne a soma dos valores, em seguida execute a função mostrando 
na tela o seguinte texto: 'A soma dos valores é ${(resultado)}'. */



let somarValores = (n1, n2) => {
    return n1 + n2
}

n1 = 32
n2 = 28

document.writeln(`A soma dos valores é ${somarValores(n1, n2)}<br>`)

function soma(a, b) {
    var resultado;
    resultado = a + b;
    return resultado;

}
var x = n1, y = n2, z = 0;
z = soma(x, y);
document.writeln(`O resultado da 2ª soma valores é ${z}`);

// resolução Aula

function somandoValores(v1, v2) {
    const total = v1 + v2;
    return (`Aqui está o retorno da minha função: ${total}`) // devolve o valor
}

const resultadoDaFuncao = somandoValores(10, 20);
alert(resultadoDaFuncao);