/* 4 - Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que 
a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e 
escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, 
mantidas as taxas de crescimento.
Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. 
Valide a entrada e permita repetir a operação. */

let popA = 80000;
let popAtualA = 0;
let popB = 200000;
let popAtualB = 0;
let anos = 0;
let crescA = 0;

let txA = 0.03;
let txB = 0.015;

popAtualB = popB;

for (popAtualA = popA; popAtualA <= popAtualB; crescA = popAtualA * txA) {
    popAtualA += crescA;
    popAtualB = popAtualB + (popAtualB * txB)
    anos++;
    document.writeln(`crescimento populacional de A = ${popAtualA.toFixed(0)}  de B = ${popAtualB.toFixed(0)} - anos = ${anos}<br>`);
}
alert(`crescimento populacional de A = ${popAtualA.toFixed(0)}  de B = ${popAtualB.toFixed(0)} - anos = ${anos}`);
