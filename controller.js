// VALIDAÇÃPO DE PREENCHIMENTO
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        //alert('Campos preenchidos com sucesso');
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){

    } else{
        alert("Favor, informar um nome");
    }

}

// FUNÇÃO DE CRIAÇÃO DE LISTA
function crialista(){
    let tabela = document.getElementById('tabela')
    innerHTML "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length - 1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td></td></tr>";
    }
}