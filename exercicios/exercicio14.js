function tabuada(numero) {
    for(let i = 0; i <= 10; i++){
        let soma = numero + i;
        console.log(`${numero} + ${i} = ${soma}`);
    }
}
// Exemplo de uso
let numero = 7;
tabuada(numero);