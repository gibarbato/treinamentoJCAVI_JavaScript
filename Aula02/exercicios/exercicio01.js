/* 1 - Faça um programa que peça uma nota, entre zero e dez. 
Mostre uma mensagem caso o valor seja inválido e continue pedindo 
até que o usuário informe um valor válido.  */

function validarNumero(){
    let numero = window.prompt(`
        Digite uma nota válida entre 0(zero) e 10(dez)
    `)

    if (numero <= 10 && numero >= 0) {
        alert('Valor válido')
    } else {
        alert('Valor inválido')
        validarNumero()
    }
}
validarNumero() 
