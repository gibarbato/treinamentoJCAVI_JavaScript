//https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

let arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen'];
arrayMarcas.forEach((marca, indice) => {
    if(marca === "Fiat"){
        arrayMarcas.splice(indice,1);
        console.log("A marca " + marca + " corresponde ao índice: " + indice);
    }
    
});

arrayMarcas.forEach((marca, indice) => {
    console.log("A marca " + marca + " corresponde ao índice: " + indice + " após o SPLICE");
});






/* 
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

 */