
const formBusca = document.querySelector('.busca');
const campoBusca = document.querySelector('.busca__campo');
const itensCatalogo = document.querySelectorAll('.bordados');

  //verificar se o formulario de busca existe na página

if(formBusca){
    formBusca.addEventListener('submit', function(event){
        event.preventDefault();
    })   
}
    // agora vamos verificar o texto que foi digitado

campoBusca.addEventListener('input', function(){
    
    //converter o texto para minúsculo para facilitar a comparação
 const termoBusca = campoBusca.value.toLowerCase()

   // vamos verificar todas as seções de bordados
   itensCatalogo.forEach( function(item){

    // pegar o elemento que tem o textodo bordado

    const titulo = item.querySelector('h3').innerText.toLowerCase()  

     //verificar se o termo de busca é igual ao título

     if( titulo.includes(termoBusca)){
        item.style.display = 'block'; // mostrar o item
     }else{
        item.style.display = 'none'; // ocultar o item
     }

   })


})



























