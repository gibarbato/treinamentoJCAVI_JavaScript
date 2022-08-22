// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
// novo salário, sabendo que o mesmo teve um aumento de 10%

let funcionarios = ['João', 'José', 'Paulo'];
let salarios = [1500.00, 2000.00, 1850.00];

let novoSalario = 0;

for (let i = 0; i < funcionarios.length; i++) {
    const funcionario = funcionarios[i];
    const salario = salarios[i];
    novoSalario = salario + (salario*0.10);

    document.writeln(`Funcionário: ${funcionario} - Salário Atual ${salarios[i]} - Novo Salário: ${novoSalario}<br>`);
    
}