/* 2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações.  */

function validarLogin(){
    let nome = window.prompt(`
        Usuário:
    `)

    let senha = window.prompt(`
        Senha:
    `)

    if (senha == nome) {
        alert(`senha inválida`)
        validarLogin()
    } else {
        alert('login efetuado com sucesso')
    }
}

//validarLogin() 