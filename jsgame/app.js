alert('Bem vindo ao game número secreto');

let numeroSecreto = Math.floor(Math.random() * 10 + 1);
let chute
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`Você errou! ${chute} é maior que o número secreto.`);
        } else {
            alert(`Você errou! ${chute} é menor que o número secreto.`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto! ${numeroSecreto}. Com ${tentativas} ${palavraTentativa}.`);