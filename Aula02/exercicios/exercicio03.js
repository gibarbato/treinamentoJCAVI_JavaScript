/* 3 - Faça um programa que leia e valide as seguintes informações:
- Nome: maior que 3 caracteres;
- Idade: entre 0 e 150;
- Salário: maior que zero;
- Sexo: 'f' ou 'm';
- Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length */

function validarUsuario() {

    let nome = window.prompt(`
        Digite o Nome do usuário:
    `)
    if (nome.length <= 3) {
        alert(`digite um nome válido`)
        validarUsuario()
    } else {
        alert('Nome válido')
    }

    let idade = window.prompt(`
        Digite a Idade do usuário:
    `)
    if (idade >= 0 && idade <= 150) {
        alert('Idade válida')
    } else {
        alert('Idade inválida')
        validarUsuario()
    }

    let salario = window.prompt(`
        Digite o Salário do usuário:
    `)
    if (salario > 0) {
        alert(`Salário igual a ${salario}`)
    } else {
        alert('Salário igua a zero')
        validarUsuario()
    }

    let sexo = window.prompt(`
        Digite o Sexo do usuário:
        m para masculino
        f para feminino
    `)
    if (sexo == 'm') {
        alert('Sexo Masculino')
    } else if (sexo == 'f') {
        alert('Sexo Feminino')
    } else {
        alert('opção inválida')
        validarUsuario()
    }

    let estadoCivil = window.prompt(`
        Digite o Estado Civil do usuário:
        s para solteiro
        c para casado
        v para viúvo
        d para divorciado
    `)
    if (estadoCivil == 's') {
        alert('Solteiro')
    } else if (estadoCivil == 'c') {
        alert('Casado')
    } else if (estadoCivil == 'v') {
        alert('Viúvo')
    } else if (estadoCivil == 'd') {
        alert('Divorciado')
    } else {
        alert('opção inválida')
        validarUsuario()
    }


}
validarUsuario() 