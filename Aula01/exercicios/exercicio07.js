// 7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade 
// e a sua opinião em relação ao filme: 
// 3 - ótimo 
// 2 - bom 
// 1 - regular 
let opniaoS = null;
let espectadores = ['mario', 'paulo', 'josé', 'maria', 'joana', 'fátima'];
let opnioes = [1, 3, 2, 2, 3, 3];

for (let x = 0; x < espectadores.length; x++) {
    const espectador = espectadores[x];
    const opniao = opnioes[x];

    if (opniao == 1) {
        opniaoS = "regular";
    } else if (opniao == 2) {
        opniaoS = "bom";
    } else if (opniao == 3) {
        opniaoS = "ótimo";
    }

    document.writeln(`O espectador ${espectador} opinou como ${opniaoS} o filme assistido<br>`);
}


