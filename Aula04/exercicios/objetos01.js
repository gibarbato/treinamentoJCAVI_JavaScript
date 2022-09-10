/* ⦁ Crie um programa de cadastro de veículos de uma loja de seminovos (utilizando array como base de dados ex: baseDeAutomoveis: [ob1, obj2,]).  
O programa deve implementar as funcionalidades descritas na figura abaixo:
 
(1) - Cadastrar automóvel;
(2) - Pesquisar automóvel;
(3) - Excluir automóvel;
(0) - Sair;


dica: Crie uma função criarAutomovel(<informacoes>) que retorne um objeto automóvel 

O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação. O programa deve respeitar as seguintes restrições:
⦁ Não se pode cadastrar uma placa previamente cadastrada;
⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
⦁ A exclusão deve ser feita pela placa do veículo;
⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca; */



const veiculos = [];

function executarMenu() {
    const resultado = prompt(`
(1) Casdastrar automóvel
(2) Listar automóveis
(3) Pesquisar automóvel
(4) Excluir automóvel
(5) Consultar placa para cadastro do veículo
(6) Sair
`)

    if (resultado == "1") {
        validarPlaca() // chamado antes para verificar se a placa já está cadastrada
        //cadastrarVeiculo() //é chamado se não existir veículo cadastrado com a placa informada
    }
    if (resultado == "2") {
        listarVeiculos();
    }
    if (resultado == "3") {
        consultaVeiculo();
    }
    if (resultado == "4") {
        excluirVeiculo();
    }
    if (resultado == "5") {
        validarPlaca();
    }
    if (resultado != "6") {
        executarMenu();
    }
}
executarMenu();

function cadastrarVeiculo() {
    const veiculo = {
        placa: prompt('Digite a placa do veiculo'),
        modelo: prompt('Digite o modelo do veiculo'),
        marca: prompt('Digite a marca do veiculo'),
        ano: prompt('Digite o ano do veiculo')
    }

    console.log(veiculo.modelo);
    console.log(veiculo.marca);
    console.log(veiculo.placa);
    console.log(veiculo.ano);

    veiculos.push(veiculo)
}

function listarVeiculos() {
    veiculos.forEach(veiculo => {
        console.log(`${veiculo.placa} - ${veiculo.modelo} - ${veiculo.marca} - ${veiculo.ano}`)
    });
}

/* function validarPlaca() {
    let consultaPlaca = prompt(`Consulte a placa do veículo para validar cadastro:`);
    let count = 0;
    alert(`A placa informada é: ${consultaPlaca}`)

    veiculos.forEach(placaCadastrada => {

        if (consultaPlaca == placaCadastrada.placa) {
            count++
        }
        if (count == 0) {
            console.log('veículo não cadastrado')
            console.log('você será direcionado para tela de cadastro')
            cadastrarVeiculo()
        } else {
            console.log('placa JÁ cadastrada')
        }
    });
}
 */
function validarPlaca() {
    let consultaPlaca = prompt(`Consulte a placa do veículo para validar cadastro:`);
    //console.log(`Placa consultada - ${consultaPlaca}`);
    let count = 0;

    for (let i = 0; i < veiculos.length; i++) {
        const teste = veiculos[i].placa
        //verificaçãp se a placa já existe 

        if (consultaPlaca == teste) {
            count++;
        }
    }
    if (count !== 0) {
        console.log(`Veículo com a placa - ${consultaPlaca} - já cadastrado`)
        console.log(veiculos.find(placa => placa.placa === consultaPlaca));
        alert(`Veículo com a placa - ${consultaPlaca} - já cadastrado`)
        //console.log(`O modelo do veículo é ${veiculos[i].modelo}`);
        //console.log(Object.values(veiculos[i]));
    } else {
        console.log(`Veículo com a placa - ${consultaPlaca} - pode ser cadastrado`);
        console.log(`Você será direcionado para a tela de cadastro`);
        alert(`Veículo com a placa - ${consultaPlaca} - pode ser cadastrado`);
        alert(`Você será direcionado para a tela de cadastro`);
        cadastrarVeiculo()
    }
}

function consultaVeiculo() {
    let informacao = prompt(`Consulte os veículos por modelo, marca ou placa:`);
    let count = 0;
    console.log(`Consulta - ${informacao}`);

    for (let j = 0; j < veiculos.length; j++) {
        if (veiculos[j].marca === informacao || veiculos[j].modelo === informacao || veiculos[j].ano === informacao || veiculos[j].placa === informacao) {
            count++
        } else {
            count = 0;
        }
        if (count > 0) {
            console.log(`Veículo cadastrado - marca: ${veiculos[j].marca} - modelo: ${veiculos[j].modelo} - placa: ${veiculos[j].placa} - ano: ${veiculos[j].ano}`);
        }
    }
}

function excluirVeiculo() {
    
let placaExcluida = prompt('Digite a placa do veículo a ser descadastrado:')
veiculos.forEach((marca, indice) => {
    if(marca.placa === placaExcluida){
        veiculos.splice(indice,1);
        console.log("A marca " + marca.placa + " corresponde ao índice: " + indice);
    }
    
});

veiculos.forEach((marca, indice) => {
    console.log("A marca " + marca.placa + " corresponde ao índice: " + indice + " após o SPLICE");
});
}