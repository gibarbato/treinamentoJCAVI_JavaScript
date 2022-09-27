import { useState } from 'react';
import './App.css';

function App() {
  //setPlaca - atualiza na tela
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  // let -> não atualiza na tela

  //RETURN
  return (

    <>
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

        <button className='btn-cadastrar'>Cadastrar</button>
        <h3>Pesquisa de veículo</h3>
        <input placeholder='Pesquisar'></input>
        <button className='btn-cadastrar'>Pesquisar</button>
      </div>
    </>


  );
}

export default App;
