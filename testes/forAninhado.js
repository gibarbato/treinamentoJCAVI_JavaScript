for (let i = 1; i <= 10; i++){
    for(let j = 1; j<= 10; j++){
        document.writeln(`${i} x ${j} = ${i*j}<br>`);
    }
}

let rMod = 0;
let contB
let contRestoZero

for (let a = 0; a < arrays.length; a++) {
    const r = arrays[a];

    for (b = 1; b <= 10; b++){
        contB = b;
        rMod2 = r % b;
        document.writeln(`Valor R: ${r} - Valor divisor: ${contB} - Resto: ${rMod2}<br>`);
    
    }