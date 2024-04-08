function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);