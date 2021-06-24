const lampada = document.getElementById("lampada");
let estado = 0;

lampada.addEventListener("click", function() {

    if(estado == 0) {
        lampada.src = "img/lampada_ligada.gif";
        estado = 1;
    } else {
        lampada.src = "img/lampada_desligada.gif";
        estado = 0;
    }

});
