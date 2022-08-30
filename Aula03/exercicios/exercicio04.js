/* 4- Crie uma função que receba um string como parâmetro  
e execute um "windows.prompt" com o texto recebido como parâmetro, 
e em seguida retorne o valor que o usuário digitou. */

function textoDigitado(){
    let texto = window.prompt(`
        Digite uma string como parâmetro:
    `)

        if(typeof texto === "string"){
        document.writeln(`O usuário digitou ${texto}.`)
        } else {
            textoDigitado()
        }
    }
    