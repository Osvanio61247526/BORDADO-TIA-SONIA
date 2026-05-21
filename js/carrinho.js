const botoesBordados = document.querySelectorAll( '.btn-adicionar')

// agora vamos criar o carrinho de compras
let carrinho = JSON.parse(localStorage.getItem( 'itemCarrinho'))
|| []

//funcao para adicionar itens ao carrinho
botoesAdicionar.forEach(function(botao){
    botao.addeventListener('click', function(){

    //recebe dados do botao
    const nomeProduto = botao.getAttribute('data-nome')
    const procoProduto = botao.getAttribute('data-preco')

    // cira um objeto para o item do carrinhio
    const itemCarrinho = {
        nome: nomeProduto,
        preco:precoProduto
    }
    // adicionar o item ao carrinho
    carrinho.push( itemcarrinho)

    //salva o carrinho no localstorade
    localStorage.setItem("itemCarrinho", JSON.stringify(carrinho))

    // exibe uma mensagem de confirmacao

    botao.innertext = 'adicionar!'
    botao.classList.replace('btn-primary', 'btn success')

    // depois de um tempo a mensagem some
    setTimeout(() => {
        botao. ennerText = 'adicionado!'
        botao.classList.replace('btn-success','btn-primary')}, 2000)
    })
    
})
   


