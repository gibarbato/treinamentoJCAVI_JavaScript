/* 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8. */

let aluno = "José";
let notas = [7, 5, 6, 5];
let somaNotas = 0;
let mediaNotas = 0;
let situacao = null;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    somaNotas = somaNotas + nota;

    };

mediaNotas = somaNotas / notas.length;

if(mediaNotas<6){
    situacao = "reprovado";
    document.writeln(`Aluno:${aluno}<br>`);
    document.writeln(`Média:${mediaNotas}<br>`);
    document.writeln(`Situação:${situacao}<br>`);
} else if (mediaNotas<8){
    situacao = "recuperação";
    document.writeln(`Aluno:${aluno}<br>`);
    document.writeln(`Média:${mediaNotas}<br>`);
    document.writeln(`Situação:${situacao}<br>`);
} else {
    situacao = "aprovado";
    document.writeln(`Aluno:${aluno}<br>`);
    document.writeln(`Média:${mediaNotas}<br>`);
    document.writeln(`Situação:${situacao}<br>`);
}