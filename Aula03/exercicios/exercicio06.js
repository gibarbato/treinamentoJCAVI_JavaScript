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
let somar = 0
let resposta

console.log('antes da function')
function retornaElementoUnitario() {
    for (let x = 0; x < vetores.length; x++) {
        for (let y = 0; y < vetores.length; y++) {
            if (vetores[x] === vetores[y]) {
                count++
                somar += count
            }

            document.writeln(`(${vetores[x]}, ${vetores[y]} - contador ${count} - soma ${somar})<br>`)
            count = 0;

        }
        if (somar === 1) {
            resposta = vetores[x]
        }
        somar = 0;
    }
    document.writeln(`Elemento que não possui repetição ${resposta}`)

}

//retornaElementoUnitario()
