let arrayJogadores =[
    {id: 1, jogador: 'Bart', posicao: 'Goleiro', mensalista:''},
    {id: 2, jogador: 'Homer', posicao: 'Meia', mensalista:''},
    {id: 3, jogador: 'Fanders', posicao: 'Lateral', mensalista:''},
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
        td_jogador.innerText = arrayJogadores[i].jogador;   
        td_posicao.innerText = arrayJogadores[i].posicao;
        td_mensalista.innerText = arrayJogadores[i].mensalista;

        td_id.classList.add('center');

        let chkBox = document.createElement('input');
        let lbl = document.createElement('label');
        chkBox.type = 'checkbox';
        lbl.textContent = ' SIM';
        //chkBox.setAttribute("onclick", "jogador.preparaEditacao(" + JSON.stringify(this.arrayJogadores[i]) + ")");

        td_mensalista.appendChild(chkBox);
        td_mensalista.appendChild(lbl);

        console.log(arrayJogadores[i]);
    }
}

listaTabela();