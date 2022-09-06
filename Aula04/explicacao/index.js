//Variáveis (String, Number, Boolean, "typeof")
//Arrays (for, forEach)
//Function(parametros)
//Objeto - Aula 04

//criar objeto - abre e fecha chave

/* const pessoas = [
    {
        nome: 'Gilberto',
        cpf: '249.031.479-32',
        altura: 1.79,
        idade: 42,
        casado: true,
    },
    {
        nome: 'Almir',
        cpf: '111.111.479-32',
        altura: 1.81,
        idade: 30,
        casado: false,
    }
];

const veiculo = {
    marca: 'vw',
    modelo: 'gol',
    ano: 2019,
    cor: 'test',
    acelerar: function () {
        alert(`O ${this.modelo} acelerou!!!`);
    },

    motorista: pessoas[0]
}

alert('O veículo ' + veiculo.modelo + ' foi dirigido por ' + veiculo.motorista.nome); */


const veiculos = [];

// push - adiciona um novo valor dentro do array
// pop


function executarMenu() {
    const resultado = prompt(`
    (1) Cadastrar Veículo
    (2) ----
    (3) Apresentar Veículos
    (4) Sair
    `)

    if (resultado == '1') {
        cadastrarVeiculo();
    }

    if (resultado == '3') {
        console.log(veiculos);
    }

    if (resultado != "4") {
        executarMenu();
    }
}

function cadastrarVeiculo() {
    const veiculo = {
        cor: prompt('Digite a cor do veículo'),
        ano: prompt('Digite o ano do veículo')

    }
    veiculos.push(veiculo);

}


executarMenu();