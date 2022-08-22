/* 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%.  */

let produto = "mercadoria";
let preco = 1320.00;
let parcela = 3;
let precoComParcela = 0.00;


if (parcela < 3) {
    document.writeln(preco);
} else if (parcela < 5) {
    precoComParcela = ((preco * 0.10) + preco);
    document.writeln(`o(a) ${produto} parcelado em ${parcela} vezes, ficará com o seu preço em ${precoComParcela}`);
} else {
    precoComParcela = ((preco * 0.20) + preco);
    document.writeln(`o(a) ${produto} parcelado em ${parcela} vezes, ficará com o seu preço ${precoComParcela}`);
}
