/* ⦁ Crie um programa de cadastro de veículos de uma loja de seminovos (utilizando array como base de dados ex: baseDeAutomoveis: [ob1, obj2,]).  O programa deve implementar as funcionalidades descritas na figura abaixo:
 
(1) - Cadastrar automóvel;
(2) - Pesquisar automóvel;
(3) - Excluir automóvel;
(0) - Sair;

dica: Crie uma função criarAutomovel(<informacoes>) que retorne um objeto automóvel 

O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação. O programa deve respeitar as seguintes restrições:
⦁ Não se pode cadastrar uma placa previamente cadastrada;
⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
⦁ A exclusão deve ser feita pela placa do veículo;
⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca;
 */

const automoveis = [];

// push - adiciona um novo valor dentro do array
// pop

function executarMenu() {
    const resultado = prompt(`
    (1) - Cadastrar automóvel
    (2) - Pesquisar automóvel
    (3) - Excluir automóvel
    (0) - Sair
    `)

    if (resultado == '1') {
        cadastrarAutomovel();
    }
    if (resultado == '2') {
        console.log(automoveis);
    }
    if (resultado == '3') {
        console.log('excluir automóvel');
    }
    if (resultado != "0") {
        executarMenu();
    }
}
function cadastrarAutomovel() {
    let placaNova
    const automovel = {
        modelo: prompt('Digite a modelo do veículo'),
        marca: prompt('Digite a marca do veículo'),
        placa: prompt('Digite a placa do veículo'),
        ano: prompt('Digite o ano do veículo')
    }
    automoveis.push(automovel);
    placaNova = automovel.placa;
    console.log(placaNova);
}

executarMenu()

placaNova = automovel.placa;
console.log(placaNova);


const isAutomovelCadastrado = false;



/* for(let i = 0; i < automoveis.length; i++){
    const automovel = automoveis[i];

    if(automovel.placa == placaNova) {
        isAutomovelCadastrado = true;
        alert(`
            Placa: ${automovel.placa}
            Ano: ${automovel.ano}
        `)
    }
} */