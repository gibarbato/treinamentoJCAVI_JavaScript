import { useState } from 'react';
import './App.css';
import { FcEmptyTrash } from 'react-icons/fc';

function App() {

  //setPlaca - atualiza na tela

  const [placaPesquisa, setPlacaPesquisa] = useState('');
  const [modeloPesquisa, setModeloPesquisa] = useState('');
  const [marcaPesquisa, setMarcaPesquisa] = useState('');
  const [anoPesquisa, setAnoPesquisa] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');

  const [veiculos, setVeiculos] = useState([]);
  // let -> não atualiza na tela


  function cadastrar() {
    let veiculo = {
      placa,
      modelo,
      marca,
      ano,
    };
    setVeiculos([...veiculos, veiculo]);
    limparForm();
  }

  function limparForm() {
    setPlaca('');
    setModelo('');
    setMarca('');
    setAno('');
  }

  function excluir(placa) {
    veiculos.forEach((v, index)=>{
      if(v.placa===placa){
        veiculos.splice(index,1)
        console.log(veiculos)
      }
    })
    setVeiculos([...veiculos]); //atualizar array
  }


  function filtrarVeiculo(placa){

    let veiculo = null;

    veiculos.forEach((v)=>{
      if(veiculo.placa===placa){
        veiculo = v
      }
    })

    return veiculo
  } 

  function pesquisar() {
    if (!placaPesquisa) {
      alert('Digite a placa que deseja pesquisar');
    } else {
      veiculos.forEach((v) => {
        if (v.placa === placaPesquisa) {
          setPlacaPesquisa(v.placa);
          setModeloPesquisa(v.modelo);
          setMarcaPesquisa(v.marca);
          setAnoPesquisa(v.ano);
        }
      })
    }
  }

  //RETURN
  return (

    <div className='container'>
      <div className='layout'>
        <h1>Loja de Seminovos</h1>
        <h3>Cadastro de veículo</h3>

        <input onChange={(e) => { setPlaca(e.target.value) }} value={placa}
          placeholder='Placa'></input>
        <input onChange={(e) => { setModelo(e.target.value) }} value={modelo}
          placeholder='Modelo'></input>
        <input onChange={(e) => { setMarca(e.target.value) }} value={marca}
          placeholder='Marca'></input>
        <input onChange={(e) => { setAno(e.target.value) }} value={ano}
          placeholder='Ano'></input>
        <button onClick={cadastrar} className='btn-cadastrar'>Cadastrar</button>

        {/* PESQUISA */}
        <h3>Pesquisa de veículo</h3>
        <input onChange={(e) => { setPlacaPesquisa(e.target.value) }} value={placaPesquisa}
          placeholder='Pesquisar'></input>
        <button onClick={pesquisar} className='btn-cadastrar'>Pesquisar</button>
        <h4>Placa: {placaPesquisa}</h4>
        <h4>Modelo: {modeloPesquisa}</h4>
        <h4>Marca: {marcaPesquisa}</h4>
        <h4>Ano: {anoPesquisa}</h4>

      </div>
      <div>
        <table>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Ação</th>
          </tr>
          {veiculos.map((veiculo) => {
            return (
              <tr>
                <td>{veiculo.placa}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.marca}</td>
                <td>{veiculo.ano}</td>
                <td>
                  <button onClick={()=>(excluir(veiculo.placa))}><FcEmptyTrash /></button>
                </td>
              </tr>
            );
          })
          }

        </table>
      </div>
    </div>


  );
}

export default App;
