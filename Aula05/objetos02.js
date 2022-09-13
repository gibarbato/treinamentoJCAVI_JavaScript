/* ⦁ Crie um programa de cadastro de uma biblioteca (utilizando array como base de dados ex: baseDeLivros: [ob1, obj2,]).  O programa deve implementar as funcionalidades descritas na figura abaixo:
(1) - Cadastrar;
(2) - Pesquisar;
(3) - Excluir;
(4) - Alterar; (desafio)
(5) - Filtrar livros por categoria
(0) - Sair;
O cadastro dos livros deve solicitar  código, título, categoria. 
O programa deve respeitar as seguintes restrições:
⦁ Não se pode cadastrar um livro com mesmo código;
⦁ A pesquisa deve ser feita pelo código;
⦁ A exclusão deve ser feita pelo código do livro; */

const livros = [];

function executarMenu() {
    const resultado = prompt(`
(1) - Cadastrar livros;
(2) - Pesquisar livros;
(3) - Excluir livros;
(4) - Alterar livros;
(5) - Filtrar livros;
(6) - Listar livros;
(0) - Sair;
`);

    if (resultado == "1") {
        cadastroLivro();
    }
    if (resultado == "2") {
        pesquisarLivro()
    }
    if (resultado == "3") {
        excluirLivro();
    }
    if (resultado == "4") {
        alterarLivro();
    }
    if (resultado == "5") {
        filtrarLivro();
    }
    if (resultado == "6") {
        listarLivros();
    }
    if (resultado != "0") {
        executarMenu();
    }
}

function cadastroLivro() {
    let codigo = prompt('Digite o código do livro');
    let isNovoLivro = true;

    livros.forEach(livro => {
        if (livro.codigo == codigo) {
            isNovoLivro = false;
        }
    });

    if (isNovoLivro) {
        const livro = {
            codigo: codigo,
            titulo: prompt('Digite o título do livro'),
            categoria: prompt('Digite a categoria do livro'),
        }
        livros.push(livro);
        console.log(livro);
    } else {
        alert('Livro já cadastrado');
    }

}

function pesquisarLivro() {
    let codigo = prompt('Digite o código do livro para pesquisa');
    let isPesquisaCodigo = false;

    livros.forEach(livro => {
        if (livro.codigo == codigo) {
            isPesquisaCodigo = true;
            console.log(`Código: ${livro.codigo} - Título: ${livro.titulo} - Categoria: ${livro.categoria}`)
        }
    });
    if (!isPesquisaCodigo) {
        alert('Livro não cadastrado');
    }

}

function excluirLivro() {
    let codigo = prompt('Digite o código do livro para exclusão');
    let isPesquisaCodigo = false;

    livros.forEach((livro, index) => {
        if (livro.codigo == codigo) {
            isPesquisaCodigo = true;
            alert(`O livro com código: ${livro.codigo} será excluído`)
            livros.splice(index, 1);
            alert(`O livro com código: ${livro.codigo} foi excluído`)
        }
    });

    if (!isPesquisaCodigo) {
        alert('Livro não cadastrado');
    }
}

function alterarLivro() {
    let codigo = prompt('Digite o código do livro para correção');
    let isPesquisaCodigo = false;

    livros.forEach((livro) => {
        if (livro.codigo == codigo) {
            livro.titulo = prompt("Digite novo título");
            livro.categoria = prompt("Digite nova categoria");
            isPesquisaCodigo = true;
        }
    });

    if (!isPesquisaCodigo) {
        alert('Livro não cadastrado');
    }
}

function filtrarLivro() {
    let filtroLivros = [];
    let filtro = prompt('Digite o título ou a categoria para pesquisa:');
    let isPesquisaCodigo = false;

    livros.forEach((livro) => {
        if (livro.titulo == filtro || livro.categoria == filtro) {
            filtroLivros.push(livro);

        }
    });
    console.log(filtroLivros);

    if (!isPesquisaCodigo) {
        alert('Livro não cadastrado');
    }

    filtroLivros.forEach((filtroLivro) => {
        console.log(`Cod. - ${filtroLivro.codigo} - Titulo. - ${filtroLivro.codigo} - Categoria. - ${filtroLivro.categoria}`)
    })
}


function listarLivros() {
    livros.forEach((livro) => {
        console.log(livro)
    })
}




executarMenu();