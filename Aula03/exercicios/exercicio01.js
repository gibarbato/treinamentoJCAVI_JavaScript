/* 1- Crie uma função que receba dois números como parâmetro, 
retorne a soma dos valores, em seguida execute a função mostrando 
na tela o seguinte texto: 'A soma dos valores é ${(resultado)}'. */



let somarValores = (n1, n2) => {
    return n1 + n2
}
document.writeln(`A soma dos valores é ${somarValores(10,30)}`)