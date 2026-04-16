document.getElementById("idCadastrar").addEventListener("click", function() {

    //pegando o usuario e a senha, dando o valor(value) para as variaveis para armazenarem no localStorage
let nomeUsuario = document.getElementById("NomeUsuario").value;
localStorage.setItem("usuario", nomeUsuario);

let senhaUsuario = document.getElementById("SenhaUsuario").value;
localStorage.setItem("senha", senhaUsuario);
let confirmarSenha = document.getElementById("confirmar-senha").value;
localStorage.setItem("confirmarSenha", confirmarSenha);
if (senhaUsuario !== confirmarSenha) {
    console.log("As senhas não coincidem. Por favor, tente novamente.");
    return; // Impede o redirecionamento se as senhas não coincidirem
}

let dataNascimento = document.getElementById("data-nascimento").value;

//analisando a data de nascimento para verificar se o usuario tem idade minima para criar conta, armazenando no localStorage
const date = new Date(dataNascimento);
localStorage.setItem("dataNascimento", dataNascimento);
if (date > new Date("2013-04-16")) {
    console.log("fora de idade minima para criar conta");
}

//redirecionando para a página do pomodoro  
window.location.href = 'http://127.0.0.1:5500/p%C3%A1gina%20de%20acesso/index.html';       
})

