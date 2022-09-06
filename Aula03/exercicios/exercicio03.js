/* 3 - Crie uma função que receba duas strings como parâmetro, 
primeiro nome e segundo nome, em seguida retorne o nome completo do indivíduo. */

function chamarFuncao(){
    function nomeCompleto(nome, sobrenome) {

        //alert(`O nome completo do usuário é ${nome} ${sobrenome}`)
        //document.writeln(`O nome completo do usuário é ${nome} ${sobrenome}`)
        document.writeln(`O nome completo do usuário é ${nome} ${sobrenome}`)
        
    }
    
    let nome = window.prompt(`
    Digite o Nome do usuário:
    `)
    
    let sobrenome = window.prompt(`
    Digite o Sobrenome do usuário:
    `)
    nomeCompleto(nome, sobrenome)
}

//nomeCompleto(nome, sobrenome) 


