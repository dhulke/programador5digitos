const lampada = document.getElementById("lampada");

let estado = 0;

const LIGADA_FRIA = 0;
const LIGADA = 1;
const DESLIGADA = 2;

lampada.addEventListener("click", function() {

    if(estado == LIGADA_FRIA) {
        lampada.src = "img/lampada_ligada_fria.png";
        estado = LIGADA;
    } else if(estado == LIGADA) {
        lampada.src = "img/lampada_ligada.gif";
        estado = DESLIGADA;
    } else {
        lampada.src = "img/lampada_desligada.gif";
        estado = LIGADA_FRIA;
    }

});
