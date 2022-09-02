let nPrimos = 0;

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numEX = 2; numEx <= limite; numEX++) {
        let ehPrimo = true;

        for (let divisor = 2; divisor < numEX; divisor++){
            if(numEX % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(numEX);
    }
}