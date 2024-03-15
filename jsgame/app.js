alert('Bem vindo ao game número secreto');

let numeroSecreto = 9;
let chute
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto){
        alert(`Você descobriu o número secreto! ${numeroSecreto}. Com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto){
            alert(`Você errou! ${chute} é maior que o número secreto.`);
        } else {
            alert(`Você errou! ${chute} é menor que o número secreto.`);
        }
        tentativas++;
    }
}