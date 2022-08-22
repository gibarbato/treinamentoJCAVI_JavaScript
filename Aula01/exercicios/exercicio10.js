/* 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
        - total de homens;
        - total de mulheres;
        - média das idades dos homens;
        - média dos pesos das mulheres. */

let sexos = ['h','h','m','h','m','h','m','h','m','h'];
let pesos = [60, 80, 58, 92, 46, 103, 47, 86, 49, 101];
let idades = [18, 34, 26, 44, 36, 50, 31, 33, 46, 28];

let homens = 0;
let mulheres = 0;
let somaIdadeHomems = 0;
let somaPesoMulheres = 0;
let mediaIdadeHomens = 0;
let mediaPesoMulheres = 0;

for (let m = 0; m < sexos.length; m++) {
    const sexo = sexos[m];
    const peso = pesos[m];
    const idade = idades [m];

    if(sexo == 'h') {
        homens ++;
        somaIdadeHomems = somaIdadeHomems + idade;
    } else if (sexo == 'm') {
        mulheres ++;
        somaPesoMulheres = somaPesoMulheres + peso;
    }
    
}

document.writeln(`Total de homens: ${homens}<br>`);
document.writeln(`Total de mulheres: ${mulheres}<br>`);
document.writeln(`Média Idade Homens: ${somaIdadeHomems/homens}<br>`);
document.writeln(`Média Peso mulheres: ${somaPesoMulheres/mulheres}<br>`);