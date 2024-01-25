let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirTelaInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número Entre 1 e 30');
}

exibirTelaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', 'Você Acertou o Número Secreto!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Número Secreto é Menor');
        } else {
            exibirTextoNaTela('p', 'O Número Secreto é Maior');
        }
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 30 + 1);
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}