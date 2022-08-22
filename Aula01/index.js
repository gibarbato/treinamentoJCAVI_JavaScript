//alert('Alerta!!!');

//console.log('Alerta!!!');

//let declara a variável
let variavelTexto = "Alert";
//variavelTexto.length - largura da String

//const declara uma variável constante - mesmo valor
//Number
const variavelNumerica = 333;

//Array
let nomesAntigo = ['Gilberto', 'Camila', 'Ayla'];
//String
let email = "gibarbato@gmail.com";

let nome = "Gilberto";
let segundoNome = "Berka";
let sobrenome = "Barbato";


console.log(nome + " " + segundoNome + " " + sobrenome);

let nomeCompleto = nome + " " + segundoNome + " " + sobrenome; 
console.log(nomeCompleto);

//nova forma de concatenar Strings, utilizando a CRASE- com a variável declarada com $
let nomeCompletoNovo = `${nome} ${segundoNome} ${sobrenome}`;

console.log(nomeCompletoNovo);

//indexOf - localiza a posição de um valor
console.log(email.indexOf('@'));

//split- divide a String em Array conforme a posição de um valor
let emailDividido = email.split('@');
console.log(emailDividido[0]);

//lenght - conta quantos caracteres tem uma String
console.log(emailDividido[0].length);


//Number
// Operadores + - * / ** %
console.log(3 ** 3);

let likes = 0;
likes++; 
likes = likes + 1;  
likes += 1;

console.log(likes++);
console.log(++likes);

// boolean - true or false
//condições

// > < >= =< == !=


let senha = '123456';
if(senha.length <= 6){
    console.log("Senha deve ter mais que 6 caractéres");
}else{
    console.log("Senha cadastrada com sucesso");
}


//Criança até 18
//Adulto até 60
//Idoso + 60

const age = 60;

if(age < 18){
    console.log("Criança");
} else if(age < 60){
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// == comparação
console.log(10==10);
console.log('10'==10); //javascript não destingue tipos com ==
console.log('10'===10); //javascript destingue tipos com ===


// laços de repetição

let nomes = ['Gilberto', 'Camila', 'Ayla'];
let idades = [42, 40, 5];

// for

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    const idade = idades[i];

    //alert('Nome: ' + nome + '; Idade: ' + idade);
    alert(`Nome: ${nome}; Idade: ${idade}`);
    document.writeln(`Nome: ${nome}; Idade: ${idade} <br/>`);
    //alert(nome);
}

