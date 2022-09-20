import { useState } from "react";

function Formulario() {

    const [nome, setNome] = useState('Gilberto');
    const [idade, setIdade] = useState('43');

    //Não cadastrar menores de idade
    //Não aceitar nomes em branco
    //------
    function cadastrar() {

        const regex = /[0-9]/

        if (nome == '' || !nome) {
            alert('Nome não pode estar em branco');
        } else if (regex.test(nome)) {
            alert('Nome usuário possui números');
        } else if (idade < 18) {
            alert('Usuário não pode ser menor de idade');
        } else {
            alert(`Nome: ${nome} - Idade: ${idade}`);
        }

    }
    //------
    return (
        <div>
            <h1>Formulário</h1>
            <h2>Nome: {nome}</h2>
            <h3>Idade: {idade} anos</h3>
            <input onChange={(e) => { setNome(e.target.value) }} placeholder="Nome" value={nome}></input>
            <input type="number" onChange={(e) => { setIdade(e.target.value) }} placeholder="Idade" value={idade}></input>
            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    );
}

export default Formulario;
