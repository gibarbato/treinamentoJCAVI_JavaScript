let arrayJogadores =[
    {id: 1, jogador: 'Bart', posicao: 'Goleiro', mensalista:''},
    {id: 2, jogador: 'Homer', posicao: 'Meia', mensalista:''},
    {id: 3, jogador: 'Flanders', posicao: 'Lateral', mensalista:''},
    {id: 4, jogador: 'Burns', posicao: 'Zagueiro', mensalista:''},
    {id: 5, jogador: 'Kall', posicao: 'Goleiro', mensalista:''},
    {id: 6, jogador: 'Abul', posicao: 'Meia', mensalista:''},
    {id: 7, jogador: 'Krusty', posicao: 'Meia', mensalista:''},
    {id: 8, jogador: 'Millhouse', posicao: 'Lateral', mensalista:''},
    {id: 9, jogador: 'Moe', posicao: 'Zagueiro', mensalista:''},
    {id: 10, jogador: 'Skinner', posicao: 'Meia', mensalista:''}, 
]


function listaTabela() {
    for(let i = 0; i<arrayJogadores.length; i++){
        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_jogador = tr.insertCell();
        let td_posicao = tr.insertCell();
        let td_mensalista = tr.insertCell();


        td_id.innerText = arrayJogadores[i].id;
        td_id.setAttribute("id", i+1);
        td_jogador.innerText = arrayJogadores[i].jogador;   
        td_posicao.innerText = arrayJogadores[i].posicao;
        td_mensalista.innerText = arrayJogadores[i].mensalista;

        td_id.classList.add('center');

        let confirmacao = document.createElement('input');
        confirmacao.type = 'checkbox';
        confirmacao.setAttribute("id", `mensalista`);

        td_mensalista.appendChild(confirmacao);

        document.getElementById('mensalista').value = arrayJogadores[i].mensalista;
        console.log(arrayJogadores[i]);
    }
}



function pegarValores(){
    let botaoEnviar=document.getElementById('btn2');       
    for (i = 0; i < arrayJogadores.length; i++){
        const jogador = arrayJogadores[i];
        arrayJogadores[i].mensalista = document.getElementById(`mensalista`).value;
        console.log(`ID - ${jogador.id} - JOGAODR - ${jogador.jogador} - POSIÇÃO - ${jogador.posicao} - MENSALISTA - ${jogador.mensalista}`);
    }

}


