import { useState } from "react";

function Formulario() {
    const [veiculos, setVeiculos] = useState([]);

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');

    // função cadastrar()
    /*     const cadastrar = () => {
            setVeiculos([... veiculos, {
                placa: placa,
                marca: marca,
                modelo: modelo,
                ano: ano,
            }])
        } */

    // função cadastrar() com alterações
    const cadastrar = () => {
        let placaNova = placa;
        let isPlaca = true;

        veiculos.forEach(veiculo => {
            if (veiculo.placa === placa) {
                isPlaca = false;
            }
        });

        if (isPlaca) {
            setVeiculos([...veiculos, {
                placa: placaNova,
                marca: marca,
                modelo: modelo,
                ano: ano,
            }])
        } else {
            alert('placa já cadastrada');
        }
    }

    function listar() {
        veiculos.forEach(veiculo => {
            console.log(veiculo);
        })
        console.log(veiculos);
    }






    //------
    return (
        <div>
            <h1>Formulário</h1>
            <h2>Placa: {placa}</h2>
            <h2>Modelo: {modelo}</h2>
            <h2>Marca: {marca}</h2>
            <h3>Ano: {ano}</h3>
            <div>
                <input onChange={(e) => { setPlaca(e.target.value) }} placeholder="Placa" value={placa}></input>
            </div>
            <div>
                <input onChange={(e) => { setModelo(e.target.value) }} placeholder="Modelo" value={modelo}></input>
            </div>
            <div>
                <input onChange={(e) => { setMarca(e.target.value) }} placeholder="Marca" value={marca}></input>
            </div>
            <div>
                <input type="number" onChange={(e) => { setAno(e.target.value) }} placeholder="Ano" value={ano}></input>
            </div>
            <button onClick={cadastrar}>Cadastrar</button>
            <button onClick={listar}>Listar</button>
        </div>
    );
}

export default Formulario;
