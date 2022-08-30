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

let vetores = ["a", "b", "a", "a", "c", "b"]
let count = 0

function letrasRepetidas() {
    for (i = 0; i < vetores.length; i++) {
        let vetor = vetores[i]

        document.writeln(`posição array = ${i} - letra da posição ${vetor}`)
    }
}
