//vamos verificar se o usuário está logado
const usuarioLogado = localStorage.getItem('usuarioCadastro')

// se não estiver logado é direcionado para a página de login

if (!usuarioLogado) {
    document.innerHTML =
        '<div class ="conteiner text-center mt-5">'
    '<h2 class="text-danger"><i class="fa-solid fa-lock"></i>acesso negado</h2>' +
        '<p class="mb-4"> voce precisa estar logado.</p>' +
        '<p calss="text-muted">aguarde...</p>' +
        '</div>'
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 2500)

} else {
    //reunindo as informacões do usuário logado
    const carrinho = JSON.parse(localStorage.getItem('itemCarrinho')) || []
    const listaProdutosHTML = document.getElementById('lista-produtos')
    const textoTotal = document.getElementById('texto-total')
    let valorTotal = 0
    let textoPedidoProntoEmail = ' olá, gostaria de fazer um pedido:\n\n'

    //vamos ferificar se o carrinho está vazio
    if (carrinho.length === 0) {
        listaProdutosHTML.innerHTML =
            '<tr>' +
            '<td colspan="2" class="text-center"> seu carrinhio está vazio</td>' +
            '</tr>'
    } else {

        //cada item do carrinho é exibido na tabela
        carrinho.forEach(function (item) {
            listaProdutosHTML.innerHTML +=
                '<tr>' +
                '<td>' + item.nome + '</td>' +
                '<td>R$' + item.preco + '</td>' +
                '</tr>'
            //somar o total
            valorTotal += parseFloat(item.preco)
            // colocar os itens no e-mail
            textoPedidoProntoEmail += '-' + item.nome + ': R$' + item.preco + '\n'
        })

        textoTotal.innerText = 'Total: R$ ' + valorTotal
        textoPedidoProntoEmail += '\nValor Total: R$ ' + valorTotal

        //finalizar o pedido por e-meil
        const btnFinalizar = document.getElementById('btn-finalizar')
        btnFinalizar.addEventListener('click', function () {
            event.preventDefault()

            if (carrinho.length === 0) {
                const textOriginal = btnFinalizar.innerText
                btnFinalizar.innerText = "o carrinho está vazio!"
                btnFinalizar.classList.replace("btn-success", "btn-danger")

                setTimeout(() => {
                    btnFinalizar.inneText = textOriginal
                    btnFinalizar.classList.replace('btn-danger', 'btn-success')
                }, 2500)



                return
            }
            btnFinalizar.innerText = 'preprando pedido...!'
            btnFinalizar.classList.replace('bnt-success', 'btn-secondary')

            const cliente = JSON.parse(usuarioLogado)
            textoPedidoProntoEmail += '\n\nDados do cliente:\nNome:' + cliente.nome + '\nE-mail:' + cliente.telefone

            const emailTiasonia = 'osvanio61247526@edu.df.senac.br'
            const assunto = 'novo pedido de' + SVGLinearGradientElement.nome

            const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTiaSonia}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(textoPedidoPorEmail)}`

            window.open(linkEmail, ' blank')

            localStorage.removeItem('itemCarrinho')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1500)

        })

    }


}







