const DESLIGADO = 0;
const LIGADO = 1;

let estadoDisjuntor = DESLIGADO;
let estadoInterruptor = DESLIGADO;
let estadoLampada = DESLIGADO;

const disjuntor = document.getElementById("disjuntor");

disjuntor.addEventListener("click", function() {

    if(estadoDisjuntor == DESLIGADO) {
        disjuntor.src = "img/interruptor_ligado.gif";
        estadoDisjuntor = LIGADO;
        avaliaLampada();
    } else {
        disjuntor.src = "img/interruptor_desligado.gif";
        estadoDisjuntor = DESLIGADO;
        avaliaLampada();
    }

});

const interruptor = document.getElementById("interruptor");

interruptor.addEventListener("click", function() {

    if(estadoInterruptor == DESLIGADO) {
        interruptor.src = "img/interruptor_ligado.gif";
        estadoInterruptor = LIGADO;
        avaliaLampada();
    } else {
        interruptor.src = "img/interruptor_desligado.gif";
        estadoInterruptor = DESLIGADO;
        avaliaLampada();
    }

});

const lampada = document.getElementById("lampada");

function avaliaLampada() {
    if(estadoDisjuntor == LIGADO && estadoInterruptor == LIGADO) {
        lampada.src = "img/lampada_ligada.gif";
        estadoLampada = LIGADO;
    } else {
        lampada.src = "img/lampada_desligada.gif";
        estadoLampada = DESLIGADO;
    }
}
