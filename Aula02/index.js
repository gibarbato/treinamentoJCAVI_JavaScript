// pede o texto para o usuário
//window.prompt

//document.writeln(resposta);


// função

function executarMenu(){
    let resposta = window.prompt(`
    (1) xxxx
    (2) xxxx
    (3) xxxx
    (4) sair
    `)

    if (resposta !=4) {
        executarMenu()
    }
}

executarMenu() 

/* function somarDoisNumeros(n1, n2, n3) {
    let resultado = n1 + n2 + n3;
    return resultado // return está devolvendo o resultado para fora da função
}

let total = somarDoisNumeros(10, 30, 35);

alert(total); // resultado está dentro do escolpo da função.
document.writeln(total); // resultado está dentro do escolpo da função. */