//10 - Faça um programa que receba dois números inteiros e gere os números inteiros 
//que estão no intervalo compreendido por eles.

function intervalo(){
    let valorInicial = window.prompt(`insira o valor inicial:`);
    let valorFinal =  window.prompt(`insira o valor final:`);
    let valoresIntervalo = 0;
    
    valorInicial=parseInt(valorInicial);
    valorFinal=parseInt(valorFinal);

    if (valorFinal <= valorInicial) {
    alert(`O valor final deve ser maior que o valor inicial`);
    intervalo()
    }
    
    //valorInicial = parseInt(valorInicial);
    //valorFinal = parseInt(valorFinal);
    for(valoresIntervalo = valorInicial; valoresIntervalo <= valorFinal; valoresIntervalo++) {
    
    // valoresIntervalo+=1;
    document.writeln(`${valoresIntervalo}`);
    }
    }
    intervalo()