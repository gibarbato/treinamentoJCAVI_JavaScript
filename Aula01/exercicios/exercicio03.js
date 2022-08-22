
/* 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
cálculo atribuir o valor para uma variável C.  */

let a = 2;
let b = 4;
let c = null;

if (a == b) {
    c = a + b;    
    document.writeln(`Valores iguais...<br> Devem ser somados: 
    <br>a = ${a};<br> b = ${b}; <br>Resultado = ${c}<br>`);
} else {
    c = a * b;
}
document.writeln(`Valores diferentes...<br> Devem ser multiplicados: 
    <br>a = ${a};<br> b = ${b}; <br>Resultado = ${c}<br>`);

let d = 3;
let e = 3;
let f = null;

if (d == e) {
    f = d + e;    
    document.writeln(`Valores iguais...<br> Devem ser somados: 
    <br>a = ${d};<br> b = ${e}; <br>Resultado = ${f}<br>`);
} else {
    f = d * e;
    document.writeln(`Valores diferentes...<br> Devem ser multiplicados: 
    <br>a = ${d};<br> b = ${e}; <br>Resultado = ${f}<br>`);
}