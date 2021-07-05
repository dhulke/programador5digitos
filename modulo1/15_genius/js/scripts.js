const VERDE = 0;
const VERMELHO = 1;
const AMARELO = 2;
const AZUL = 3;

const MOSTRANDO = 0;
const ESPERANDO = 1;
const FIM = 2;

let estado = MOSTRANDO;
let memoria = [];
let tentativas = [];
let pontuacaoMaxima = 0;

novaRodada();

function novaRodada() {
    if(memoria.length > pontuacaoMaxima) {
        pontuacaoMaxima = memoria.length;
    }
    document.getElementById("pontuacao_atual").innerHTML = memoria.length;
    document.getElementById("pontuacao_maxima").innerHTML = pontuacaoMaxima;
    tentativas = [];
    const cor = geraCorAleatoria();
    memoria.push(cor);
    mudaEstado(MOSTRANDO);
    setTimeout(function() {
        mostraMemoria();
    }, 800);
}

function geraCorAleatoria() {
    const numeroEntre0e3 = Math.floor(Math.random() * 4);
    return numeroEntre0e3;
}

function mostraMemoria() {    
    for(let i = 0; i < memoria.length; i++) {
        setTimeout(function() {
            mostraCor(memoria[i]);
        }, i * 1100);
    }

    setTimeout(function() {
        mudaEstado(ESPERANDO);
    }, memoria.length * 1100)
}

function mudaEstado(novoEstado) {
    estado = novoEstado

    if(novoEstado == ESPERANDO) {
        document.getElementById("estado").innerHTML = "Esperando";
    } else if(novoEstado == MOSTRANDO) {
        document.getElementById("estado").innerHTML = "Mostrando";
    } else if(novoEstado == FIM) {
        document.getElementById("estado").innerHTML = "Fim";
    } 
}

function mostraCor(cor) {
    let elemento;
    if(cor == VERDE) {
        elemento = document.getElementById("verde");
    } else if(cor == VERMELHO) {
        elemento = document.getElementById("vermelho");
    } else if(cor == AMARELO) {
        elemento = document.getElementById("amarelo");
    } else if(cor == AZUL) {
        elemento = document.getElementById("azul");
    }

    elemento.classList.add('ativo');
    setTimeout(function() {
        elemento.classList.remove('ativo')
    }, 800);
}

const verde = document.getElementById("verde");
verde.addEventListener("click", function() {
    clicaCor(VERDE);
});

const vermelho = document.getElementById("vermelho");
vermelho.addEventListener("click", function() {
    clicaCor(VERMELHO);
});

const amarelo = document.getElementById("amarelo");
amarelo.addEventListener("click", function() {
    clicaCor(AMARELO);
});

const azul = document.getElementById("azul");
azul.addEventListener("click", function() {
    clicaCor(AZUL);
});

function clicaCor(cor) {
    if(estado == MOSTRANDO) {
        return;
    } else if(estado == ESPERANDO) {
        tentativas.push(cor);
        const comparacao = comparaTentativas();
        if(!comparacao) {
            reinicia();
        } else if(comparacao && tentativas.length == memoria.length) {
            novaRodada();
        }
    }
}

function reinicia() {
    setTimeout(function() {
        alert("Fim de jogo. Reiniciando");
        console.log(memoria, tentativas)
        memoria = [];
        estado = MOSTRANDO;
        tentativas = [];
        novaRodada();
    }, 1);
}

function comparaTentativas() {
    for(const i in tentativas) {
        if(tentativas[i] != memoria[i]) {
            return false;
        }
    }
    return true;
}