
// Banco de dados
const nomeUsuario1 = "user1@gmail.com"
const senhaUsuario1 = "123456"
const nomeUsuario2 = "user2@gmail.com"
const senhaUsuario2 = "123456"

// variáveis de login

let nomeDigitado = prompt("Digite seu email")
let senhaDigitado = prompt ("Digite sua senha")

//Verificação de login
if(nomeDigitado === nomeUsuario1 && senhaDigitada === senhaUsuario1)
 { 
    alert("Login bem-sucedido! Bem vindo," + nomeUsuario1 + "!")
 } else if( nomeDigitado === nomeUsuario2 && senhaDigitada === senhaUsuario2)
    {
        alert( "Login bem-sucedido! Bem-vindo," + nomeUsuario2 + "!")
    } else
    {
        alert( "Login falhou! Email ou senha incorretos")
        document.body.classList.add("acesso-negado")
    }

    

    
    




    


    
























