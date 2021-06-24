let ultimoNumero;
let ultimaOperacao;

for(let i = 0; i < 10; i++) {
    const botao = document.getElementById(`botao${i}`);

    botao.addEventListener("click", function() {
        adicionarCaracter(i);
    });
}

const botaoPonto = document.getElementById("botaoPonto");

botaoPonto.addEventListener("click", function() {
    adicionarCaracter(".");
});

function adicionarCaracter(caracter) {
    const campoNumero = document.getElementById("numero");
    campoNumero.value = campoNumero.value + caracter;
    campoNumero.focus();
}

const botaoSomar = document.getElementById("somar");

botaoSomar.addEventListener("click", function() {
    calcular("+");
});

const botaoSubtrair = document.getElementById("subtrair");

botaoSubtrair.addEventListener("click", function() {
    calcular("-");
});

const botaoMultiplicar = document.getElementById("multiplicar");

botaoMultiplicar.addEventListener("click", function() {
    calcular("*");
});

const botaoDividir = document.getElementById("dividir");

botaoDividir.addEventListener("click", function() {
    calcular("/");
});

const botaoIgual = document.getElementById("igual");

botaoIgual.addEventListener("click", function() {
    const campoNumero = document.getElementById("numero");
    const numero = parseFloat(campoNumero.value);
    realizaOperacao(ultimaOperacao, numero);
    ultimaOperacao = undefined;
    campoNumero.value = ultimoNumero;
    campoNumero.focus();
});

const botaoLimpar = document.getElementById("limpar");

botaoLimpar.addEventListener("click", function() {
    const campoNumero = document.getElementById("numero");
    ultimaOperacao = undefined;
    ultimoNumero = undefined;
    campoNumero.value = "";
    campoNumero.focus();
});

function calcular(operacao) {
    const campoNumero = document.getElementById("numero");
    const numero = parseFloat(campoNumero.value);
    realizaOperacao(ultimaOperacao, numero);
    ultimaOperacao = operacao;
    campoNumero.value = "";
    campoNumero.focus();
}

function realizaOperacao(operacao, numero) {
    if(ultimoNumero == undefined) {
        ultimoNumero = numero;
    } else {
        switch(operacao) {
            case "+": ultimoNumero = ultimoNumero + numero; break;
            case "-": ultimoNumero = ultimoNumero - numero; break;
            case "*": ultimoNumero = ultimoNumero * numero; break;
            case "/": ultimoNumero = ultimoNumero / numero; break;
        }
    }
}
