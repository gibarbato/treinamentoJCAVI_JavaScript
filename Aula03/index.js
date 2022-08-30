//criar variável com uma função

/* let somarValores =function(n1, n2) {
    let total = 0
    total = n1 + n2
    return total // retornar o valor calculado
} */

// não se consegue usar chamar a função antes de criá-la

// os parametros ficam sempre dentro dos parenteses

/* function somarValores(n1, n2) {
    let total = 0
    total = n1 + n2
    return total // retornar o valor calculado
}


// 1ª forma de apresentar o resultado
// const resultado = somarValores(10, 20);
// alert(resultado);

// 2ª forma de apresentar o resultado
alert(`A soma dos valores é ${somarValores(10, 20)}`);
 */

function dividirValores(n1, n2) {
    /* let resultado = n1 / n2
    return resultado */ //formas de se escrever funções
    if(typeof n1 == "string"){

    } else {
        alert("Parâmetro de tipo inválido")
    }
    return n1/n2 // formas de escrever funções
}

/* // flexFunction
let subtrairValores = (n1, n2) => {
    return n1 - n2
} */


// typeOf -> retorna  o tipo de variável