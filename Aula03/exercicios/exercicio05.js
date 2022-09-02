/* 5- Crie uma função que receba um array de números (Valide os dados dentro do array, 
    reaproveite a função criada no exercício 1) e depois calcule a média de todos os 
    valores dentro do array. Execute a função mostrando na tela o seguinte texto: 
    'A média dos valores do array é ${(resultado)}'. */

let dadosArrays = []
let tamanho = 0;
let somarDados = 0;
let media = 0;


function validaDados2() {
    tamanho = window.prompt(`digite a quantidade de elementos do ARRAY:`);
    tamanho = parseInt(tamanho);
    
    if (tamanho > 0 ) {
        for (let i = 0; i < tamanho; i++) {
            dadosArrays[i] = window.prompt(`digite o ${i + 1} valor`);
            document.writeln(dadosArrays[i])
        }
        function mediaDados() {
            for (let i = 0; i < dadosArrays.length; i++) {
                let mediaDado = dadosArrays[i];
                mediaDado = parseInt(mediaDado);
                somarDados += mediaDado;
    
            }
            media = somarDados/dadosArrays.length;
            document.writeln(`<br>A soma dos dados do Array é ${somarDados}`);
            document.writeln(`<br>A média dos dados do Array é ${media}`);
        }
        mediaDados()
    } else {
        alert('Digite um valor válido')
        validaDados2()
    }
    
}
