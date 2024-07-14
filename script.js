function redirecionarParaOutraPagina(){
    window.location.href = "./index02.html"
}

function voltar (){
    window.location.href = './index01.html'
}

function signUp(){
    const user = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password01 = document.getElementById('password01').value;
    const textCerto = document.getElementById('certo')
    const textErro = document.getElementById('erro')

    const data = [{
        username: user,
        key: password
    }]

    if(!user || !password || !password){
        textErro.innerHTML ="Por favor, preencha todos os campos.";
        textCerto.innerHTML = " ";
    }else if(password != password01){
        textErro.innerHTML ="As senhas devem ser iguais";
        textCerto.innerHTML = " ";
    }else{
    localStorage.setItem("username",user);
    localStorage.setItem("key",password);
    textErro.innerHTML =" ";
    textCerto.innerHTML = "Cadastro feito com sucesso";
    }
}

function entrar(){
    const name = localStorage.getItem('username')
    const password = localStorage.getItem('key')
    const user = document.getElementById('userr').value;
    const key = document.getElementById('key').value;
    const textCerto = document.getElementById('certo')
    const textErro = document.getElementById('erro')

    if(!user || !key){
        textErro.innerHTML ="Por favor, preencha todos os campos.";
        textCerto.innerHTML = " ";
    }else if(name == user && password == key){
        textErro.innerHTML =" ";
        textCerto.innerHTML = "Login feito com sucesso";
        window.location.href= "./index03.html"
        textBem.innerHTML = user
    }else{
        textErro.innerHTML ="Senha ou email incorreto";
        textCerto.innerHTML = " "
    }

}

