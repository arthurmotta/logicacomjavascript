let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipoDeIngresso == 'pista') {
        if(quantidade > quantidadePista) {
            alert('Quantidade de ingressos indisponível!');
            return;
        }
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').innerText = `${quantidadePista}`;
    } else if (tipoDeIngresso == 'superior') {
        if(quantidade > quantidadeSuperior) {
            alert('Quantidade de ingressos indisponível!');
            return;
        }
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').innerText = `${quantidadeSuperior}`;
    } else {
        if(quantidade > quantidadeInferior) {
            alert('Quantidade de ingressos indisponível!');
            return;
        }
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').innerText = `${quantidadeInferior}`;
    }
}