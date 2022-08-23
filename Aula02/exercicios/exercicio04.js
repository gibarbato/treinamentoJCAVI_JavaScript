/* 4 - Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que 
a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e 
escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, 
mantidas as taxas de crescimento.
Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. 
Valide a entrada e permita repetir a operação. */

let popA = window.prompt(`insira a população da cidade A`);
let popB = window.prompt(`insira a população da cidade B`);
let txA = window.prompt(`Digite a taxa de crescimento população da cidade A:
                            usar (.) ponto no lugar da (,) virgula `)
let txB = window.prompt(`Digite a taxa de crescimento população da cidade B:
                            usar (.) ponto no lugar da (,) virgula`)

let popAtualA = parseInt(popA);
let popAtualB = parseInt(popB);
txA = parseFloat(txA / 100);
txB = parseFloat(txB / 100);
let anos = 0;
let crescA = 0;


for (popAtualA; popAtualA <= popAtualB; crescA = popAtualA * txA) {
    popAtualA += crescA;
    popAtualB = popAtualB + (popAtualB * txB)
    anos++;
    //document.writeln(`crescimento populacional de A = ${popAtualA.toFixed(0)}  de B = ${popAtualB.toFixed(0)} - anos = ${anos}<br>`);
}
alert(`crescimento populacional de A = ${popAtualA.toFixed(0)}  de B = ${popAtualB.toFixed(0)} - anos = ${anos}`);