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
        //validarPlaca() // chamado antes para verificar se a placa já está cadastrada
        cadastrarVeiculo() //é chamado se não existir veículo cadastrado com a placa informada
    }
    if (resultado == "2") {
        listarVeiculos();
    }
    if (resultado == "3") {
        consultaVeiculo();
    }
    if (resultado == "4") {
        alert('excluir veículos');
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

function validarPlaca() {
    let consultaPlaca = prompt(`Consulte a placa do veículo para validar cadastro:`);
    alert(`A placa informada é: ${consultaPlaca}`)
    
    veiculos.forEach(placaCadastrada => {
        if(consultaPlaca == placaCadastrada.placa){
            console.log('placa JÁ cadastrada')
        } else {
            console.log('veículo não cadastrado')
            console.log('você será direcionado para tela de cadastro')
            cadastrarVeiculo()
        }
    });
}
