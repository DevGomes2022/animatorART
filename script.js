const imagens = [
    "assets/Fantasma-com-perna/ft1.png",
    "assets/Fantasma-com-perna/ft2.png",
    "assets/Fantasma-com-perna/ft3.png",
    "assets/Fantasma-com-perna/ft4.png",
    "assets/Fantasma-com-perna/ft5.png",
    "assets/Fantasma-com-perna/ft6.png",
    "assets/Fantasma-com-perna/ft7.png"
    // Adicione mais URLs de imagens aqui
];

const imagemElement = document.getElementById("imagem");
const botaoTrocar = document.getElementById("botaoTrocar");
const velocidadeSlider = document.getElementById("velocidade");

let imagemAtual = 0;
let intervalId = null;
let velocidade = 1000; // Valor padrão de velocidade em milissegundos

function trocarImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    imagemElement.src = imagens[imagemAtual];
}

function iniciarTrocaAutomatica() {
    pararTrocaAutomatica();
    intervalId = setInterval(trocarImagem, velocidade);
}

function pararTrocaAutomatica() {
    clearInterval(intervalId);
    intervalId = null;
}

botaoTrocar.addEventListener("click", () => {
    trocarImagem();
});

velocidadeSlider.addEventListener("input", () => {
    velocidade = 1000 / velocidadeSlider.value; // Converte a velocidade de troca
    if (intervalId !== null) {
        iniciarTrocaAutomatica(); // Reinicia a troca automática com a nova velocidade
    }
});

iniciarTrocaAutomatica(); // Iniciar a troca automática inicialmente