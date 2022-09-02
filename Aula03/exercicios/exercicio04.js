/* 4- Crie uma função que receba um string como parâmetro  
e execute um "windows.prompt" com o texto recebido como parâmetro, 
e em seguida retorne o valor que o usuário digitou. */

function textoDigitado(texto) {
    texto = window.prompt(`
        Digite uma string como parâmetro:
    `)

    
    document.writeln(texto)
}

