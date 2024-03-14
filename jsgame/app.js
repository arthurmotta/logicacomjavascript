alert('Boas vindas ao jogo de número secreto');

let numeroSecreto = 9;

let chute = prompt('Escolha um número entre 1 e 30');

if (numeroSecreto == chute){
    alert(`Você descobriu o número secreto! ${numeroSecreto}`);
}else{
    alert('Você errou');
}
