/* 6- Neste exercício, temos um array composto de letras repetidas e 
uma letra isolada. Por exemplo, temos um array chamado vetor:
let vetor = ["a", "b", "a", "a", "c", "b"]
Aqui, temos:
 vetor[0] = "a"; 
 vetor[1] = "b";
 vetor[2] = "a";
 vetor[3] = "a";
 vetor[4] = "c";
 vetor[5] = "b";
Sabemos que a única letra que não possui repetição está na posição [4], 
elemento “c”. Então, crie uma função que retornar este elemento. */

const vetores = ["a", "b", "a", "a", "c", "b"]
let count = 0;
let soma = 0
let resposta


function retornaElementoUnitario() {
    for (let x = 0; x < vetores.length; x++) {
        for (let y = 0; y < vetores.length; y++) {
            if (vetores[x] === vetores[y]) {
                count++
                soma += count
            }

            document.writeln(`(${vetores[x]}, ${vetores[y]} - contador ${count} - soma ${soma})<br>`)
            count = 0;

        }
        if (soma === 1) {
            resposta = vetores[x]
        }
        soma = 0;
    }
    document.writeln(`Elemento que não possui repetição ${resposta}`)
    
}

//retornaElementoUnitario()