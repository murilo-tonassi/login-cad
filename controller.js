// VALIDAÇÃPO DE PREENCHIMENTO
function acessar(){
    let loginEmail = document.getElementByld('loginEmail').value;
    let loginSenha = document.getElementByld('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
    }
}