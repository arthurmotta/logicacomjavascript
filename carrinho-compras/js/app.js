let carrinho = [];

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerText = '';
    document.getElementById('valor-total').innerText = 'R$0';
    carrinho = [];
}