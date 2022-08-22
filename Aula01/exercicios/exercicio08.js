// 8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:<br/>
// - a média das idades das pessoas que responderam ótimo;<br/>
// - a quantidade de pessoas que responderam regular;<br/>
// - a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.<br/>


let ages = [20, 21, 22, 30, 31, 32, 40, 41, 42, 50, 51, 52, 60, 61, 62];
let respostas = ['ótimo', 'regular', 'bom', 'regular', 'bom', 'ótimo', 'regular',
    'bom', 'ótimo', 'regular', 'bom', 'ótimo', 'regular', 'bom', 'bom'];

mediaIdadeOtimo = 0;
mediaIdadeRegular = 0;
mediaIdadeBom = 0;
somaIdadeOtimo = 0;
somaIdadeRegular = 0;
somaIdadeBom = 0;
qtdadeIdadeOtimo = 0;
qtdadeIdadeRegular = 0;
qtdadeIdadeBom = 0;
percentualOtimo = 0;
percentualRegular = 0;
percentualBom = 0;


for (let z = 0; z < respostas.length; z++) {
    const resposta = respostas[z];
    const MIO = ages[z];
    
    if(resposta == 'ótimo') {
        somaIdadeOtimo += MIO;
        qtdadeIdadeOtimo++;
    } else if(resposta == 'regular') {
        somaIdadeRegular += MIO;
        qtdadeIdadeRegular++;
    } else if(resposta == 'bom') {
        somaIdadeBom += MIO;
        qtdadeIdadeBom++;
    } 
}

mediaIdadeOtimo = somaIdadeOtimo/qtdadeIdadeOtimo;
mediaIdadeRegular = somaIdadeRegular/qtdadeIdadeRegular;
mediaIdadeBom = somaIdadeBom/qtdadeIdadeBom;

percentualOtimo = (qtdadeIdadeOtimo/ages.length)*100;
percentualRegular = (qtdadeIdadeRegular/ages.length)*100;
percentualBom = (qtdadeIdadeBom/ages.length)*100;

document.writeln(`Quantidade de respostas ótimo: ${qtdadeIdadeOtimo} representando um percentual de ${percentualOtimo}%<br>`);
document.writeln(`Quantidade de respostas regular: ${qtdadeIdadeRegular} representando um percentual de ${percentualRegular}%<br>`);
document.writeln(`Quantidade de respostas bom: ${qtdadeIdadeBom} representando um percentual de ${percentualBom}%<br>`);
// document.writeln(`<br>Soma das Idades com respostas ótimo: ${somaIdadeOtimo}<br>`);
// document.writeln(`Soma das Idades com respostas regular: ${somaIdadeRegular}<br>`);
// document.writeln(`Soma das Idades com respostas bom: ${somaIdadeBom}<br>`);
document.writeln(`<br>Média das Idades com respostas ótimo: ${mediaIdadeOtimo}<br>`);
document.writeln(`Média das Idades com respostas regular: ${mediaIdadeRegular}<br>`);
document.writeln(`Média das Idades com respostas bom: ${mediaIdadeBom}<br>`);
