// 7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade 
// e a sua opinião em relação ao filme: 
// 3 - ótimo 
// 2 - bom 

// 1 - regular // 8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:<br/>
// - a média das idades das pessoas que responderam ótimo;<br/>
// - a quantidade de pessoas que responderam regular;<br/>
// - a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.<br/>

let pesquisas = [1, 3, 2, 2, 3, 3, 1, 3, 2, 2, 3, 1, 3, 2, 2, 3,];
let idadesN = [20, 21, 22, 30, 31, 32, 40, 41, 42, 50, 51, 52, 60, 61, 62,];

totalIdadeOtimo = 0;
respostaOtimo = 0;
respostaRegular = 0;
respostaBom = 0;

for (let c = 0; c < pesquisas.length; c++) {
    const pesquisa = pesquisas[c];
    const idade = idadesN[c];
    
    let mediaIdadeOtimo = 0;

    if(pesquisa == 3){
        totalIdadeOtimo += idade;
        respostaOtimo++;
        mediaIdadeOtimo = totalIdadeOtimo/respostaOtimo;
    } else if(pesquisa == 1){
        respostaRegular++;   
    } else {
        respostaBom++;
    }
}

let porcentagemBom = ((respostaBom*100/pesquisas.length));

document.writeln(`<br><br> exercício 07 e 08 feito em sala <br>`);
document.writeln(`Resposta Ótimo - média das idades = ${mediaIdadeOtimo}<br>`);
document.writeln(`Resposta Regular - quantidade = ${respostaRegular}<br>`);
document.writeln(`Resposta Bom - percentual do total = ${(porcentagemBom.toFixed(2))}<br>`);

