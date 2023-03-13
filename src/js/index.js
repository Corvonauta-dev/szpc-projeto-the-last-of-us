/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem ativa de fundo
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/
// passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
// passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3
        desativarBotaoSelecionado();

        // passo 4
        selecionarBoaoCarrosseul(botao);

        // passo 5
        esconderImagemAtiva();

        // passo 6
        mostrarImagemDeFundo(indice);
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBoaoCarrosseul(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
