const FORM_CADASTRO = document .getElementById( "form-cadastrar")

if( FORM_CADASTRAR) {
    FORM_CADASTRAR.addEventListener("submit", function( event) {
        event.preventDefault()
        const usuario ={ 
            nome:document.getElementById("nome").value,
            sobrenome : document. getElementById( "sobrenome").value, 
            email : document.getElementById( "email").value, 
            senha: document. getElementById( "senha").value,
            ddd: document.getElementById( "ddd").value, 
            telefone:document.getElementById(  telefone).value,
            endereco:document.getElementById( "endereco").value,
            cidade: document.getElementById( "cidade").value,
            numero: document.getElementById("numero").value,
            cep: document.getElementById("cep").value,
            dataNacimento:document.getElementById("data-nacimento").value,
            genero: document.getElementById("genero").selectedOptions[ 0].text


        }
        localStorage.setItem( "usuarioCadastrado",JSON.stringify( usuario))
        alert("cadastro realizado com SUCESSO!")
        Window.location.href="login.html"

    })
}
//parte de login

const FORM_LOGAR = document.getElementById("orm-logar")

if( FORM_LOGAR){ 
    FORM_LOGAR.addEventListener("submit", function( event){
    event .preventDefault()

    const suarioCadastrado =localStorage.getItem("usuarioCadastrado")

    if(usuariocadastrado){
        const usuarioEncontrado = JSON.parse( usuarioCadastrado) 

        var emailDigitado =document.getElementById (  "email" ).value
        var senhaDigitada =document.getElementById ("senha").value

        if( emailDigitado ==usuarioEncontrado.email && senhaDigitada == usuarioEncontrado. senha){ 
            alert("usuário logado com sucesso!")
            window.location.href = "index.html"
        }else {
            alert( "ATENCAO : email ou senha incorretos")
        }
                 
    }else{
        alert( "nenhum usuario cadastrado rncontrado")
    }



})

}
