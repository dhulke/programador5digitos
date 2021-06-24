const formulario = document.getElementById("formulario");

const convidados = [];

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    
    campoNome.value = "";

    if(!nome) {
        return;
    }

    convidados.push(nome);

    let listaConvidados = "";
    for(const indice in convidados) {
        listaConvidados += `<div class="convidado">${indice}: ${convidados[indice]}</div>`;
    }

    const campoConvidados = document.getElementById("convidados");
    campoConvidados.innerHTML = listaConvidados;
});
