import { useState } from "react";
import React from "react";

function Formulario() {
    const [veiculos, setVeiculos] = useState([]);

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [pesquisa, setPesquisa] = useState('');

    const cadastrar = () => {
        let placaNova = placa;
        let isPlaca = true;

        veiculos.forEach(veiculo => {
            if (veiculo.placa === placaNova) {
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
        limparForm();
    }

    function limparForm() {
        setPlaca('');
        setModelo('');
        setMarca('');
        setAno('');
    }

    function listar() {
        veiculos.forEach(veiculo => {
            console.log(veiculo);
        })
        console.log(veiculos);
    }

    function pesquisar() {
        let listaPesquisa = [];
        let valorPesquisa = pesquisa;
        let isPesquisa = false;

        if (valorPesquisa === '') {
            alert('digite uma Placa, ou modelo, ou marca válidos');
        }
        veiculos.forEach((veiculo) => {
            if (veiculo.placa === valorPesquisa || veiculo.modelo === valorPesquisa || veiculo.marca === valorPesquisa || veiculo.ano === valorPesquisa) {
                isPesquisa = true;
                listaPesquisa.push(veiculo)
            }
        });
        console.log(listaPesquisa);
        limparForm();

        if (!isPesquisa) {
            alert('Não exitem dados para esta solicitação');
        }

    }


    //------
    return (
        <div className="container">
            {/*             <div className="form">
                <h1>Formulário</h1>
                <h2>Placa:</h2>
                <h2>{placa}</h2>
                <h2>Modelo:</h2>
                <h2>{modelo}</h2>
                <h2>Marca:</h2>
                <h2>{marca}</h2>
                <h3>Ano:</h3>
                <h3>{ano}</h3>
            </div> */}
            {/* cadastro */}
            <div className="container-cadastro">
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
                {/* pesquisa */}
                <div>
                    <input onChange={(e) => { setPesquisa(e.target.value) }} placeholder="Placa Pesquisa" value={pesquisa}></input>
                </div>
                <button onClick={pesquisar}>Pesquisar</button>
                <div>
                    <button onClick={listar}>Listar</button>
                </div>
            </div>
            {/* grid veículos cadastrados */}
            <div>
                <div>
                    <table>
                        <tr>
                            <th>Placa</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Ano</th>
                        </tr>
                        {
                            veiculos.map((veiculo) => {
                                return (
                                    <tr>
                                        <td>{veiculo.placa}</td>
                                        <td>{veiculo.modelo}</td>
                                        <td>{veiculo.marca}</td>
                                        <td>{veiculo.ano}</td>
                                    </tr>
                                );
                            })
                        }

                    </table>
                </div>
            </div>

        </div>

    );
}

export default Formulario;
