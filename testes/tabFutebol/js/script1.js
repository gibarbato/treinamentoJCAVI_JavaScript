class Jogador {

    constructor() {
        this.id = 1;
        this.arrayJogadores = [];
        this.editId = null;
    }

    salvar() {
        let jogador = this.lerDados();

        if (this.validaCampos(jogador)) {
            if (this.editId == null) {
                this.adicionar(jogador);
            } else {
                this.atualizar(this.editId, jogador);
            }

        }

        this.listaTabela();
        this.cancelar()
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayJogadores.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_jogador = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayJogadores[i].id;
            td_jogador.innerText = this.arrayJogadores[i].nomeJogador;
            td_valor.innerText = this.arrayJogadores[i].posicao;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png'
            imgEdit.setAttribute("onclick", "jogador.preparaEditacao(" + JSON.stringify(this.arrayJogadores[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png'
            imgDelete.setAttribute("onclick", "jogador.deletar(" + this.arrayJogadores[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

            console.log(this.arrayJogadores);
        }
    }

    adicionar(jogador) {
        
        this.arrayJogadores.push(jogador);
        this.id++;
    }

    atualizar(id, jogador) {
        for (let i = 0; i < this.arrayJogadores.length; i++) {
            if (this.arrayJogadores[i].id == id) {
                this.arrayJogadores[i].nomeJogador = jogador.nomeJogador;
                this.arrayJogadores[i].posicao = jogador.posicao;
            }
        }
    }


    preparaEditacao(dados) {
        this.editId = dados.id;

        document.getElementById('jogador').value = dados.nomeJogador;
        document.getElementById('posicao').value = dados.posicao;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados() {
        let jogador = {}

        jogador.id = this.id;
        jogador.nomeJogador = document.getElementById('jogador').value;
        jogador.posicao = document.getElementById('posicao').value;

        return jogador;
    }

    validaCampos(jogador) {
        let msg = '';
        if (jogador.nomeJogador == '') {
            msg += '- Informe o Nome do jogador \n';
        }
        if (jogador.posicao == '') {
            msg += '- Informe a Posição do jogador \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {
        document.getElementById('jogador').value = '';
        document.getElementById('posicao').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
    }

    deletar(id) {

        if (confirm('Deseja realmente deletar o jogador do ID ' + id)) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayJogadores.length; i++) {
                if (this.arrayJogadores[i].id == id) {
                    this.arrayJogadores.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
            console.log(this.arrayJogadores);
        }
    }
}

var jogador = new Jogador();