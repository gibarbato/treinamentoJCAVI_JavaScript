
var arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen'];
arrayMarcas.forEach((marca, indice) => {
    console.log("A marca " + marca + " corresponde ao índice: " + indice);
});

var arrayNumeros = [1,2,3,4,5,6];
arrayNumeros.forEach(function(elemento){
    if (elemento % 2 == 0) 
    console.log(elemento);
});

var arrayNumeros = [1,2,3,4,5,6];
function verificaPares(elemento, indice){
    if (elemento % 2 == 0) 
    console.log("O número : " + elemento + " corresponde ao índice " + indice + " do arrayNumeros");
}
arrayNumeros.forEach(verificaPares);