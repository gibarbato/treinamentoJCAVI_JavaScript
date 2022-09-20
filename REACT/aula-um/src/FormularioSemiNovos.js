import { useState } from "react";

function FormularioSemiNovos() {

    const arrayVeiculos = [];

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');


    function cadastrarVeiculo() {
        let placaInformada = placa;
        let isNovaPlaca = true;

        arrayVeiculos.forEach(veiculo => {
            if (veiculo.placa === placaInformada) {
                isNovaPlaca = false;
            }
        });
        if (isNovaPlaca) {
            const veiculo = {
                placa: placa,
                modelo: modelo,
                marca: marca,
                ano: ano,
            }
            arrayVeiculos.push(veiculo);
            console.log(veiculo);
        } else {
            alert('veículo já cadastrado');
        }
    }




    return (
        <div>
            <div>
                <h1>Loja de Seminovos</h1>
                <h3>Placa: {placa}</h3>
                <h3>Modelo: {modelo}</h3>
                <h3>Marca: {marca}</h3>
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
                    <input onChange={(e) => { setAno(e.target.value) }} placeholder="Ano" value={ano}></input>
                </div>

                <div>
                    <button onClick={cadastrarVeiculo}>CADASTRAR</button>
                </div>
                <div>
                    <input placeholder="Placa"></input>
                </div>
                <div>
                    <button>PESQUISAR</button>
                </div>
            </div>
        </div>
    );
}

export default FormularioSemiNovos;