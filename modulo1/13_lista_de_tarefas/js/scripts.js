const tarefas = [];

const formulario_inserir = document.getElementById("formulario_inserir");

formulario_inserir.addEventListener("submit", function(event) {
    event.preventDefault();

    const tarefa = getTarefa();

    if(!tarefa) {
        return;
    }

    tarefas.push(tarefa);

    mostraLista(tarefas);
    limpaTarefaEFoca();
});

function limpaTarefaEFoca() {
    const campoTarefa = document.getElementById("tarefa");
    campoTarefa.value = "";
    campoTarefa.focus();
}

function getTarefa() {
    const campoTarefa = document.getElementById("tarefa");
    const tarefa = campoTarefa.value;
    return tarefa;
}

function mostraLista(tarefas) {
    let listaTarefas = "";
    for(const indice in tarefas) {
        listaTarefas += `<div class="tarefa">${indice}: ${tarefas[indice]}</div>`;
    }

    const campoTarefas = document.getElementById("tarefas");
    campoTarefas.innerHTML = listaTarefas;
}

const botao_inserir_comeco = document.getElementById("inserir_comeco");

botao_inserir_comeco.addEventListener("click", function() {

    const tarefa = getTarefa();

    if(!tarefa) {
        return;
    }

    tarefas.unshift(tarefa);

    mostraLista(tarefas);
    limpaTarefaEFoca();
});

const botao_remover_comeco = document.getElementById("remover_comeco");

botao_remover_comeco.addEventListener("click", function() {
    tarefas.shift();
    mostraLista(tarefas);
});

const botao_remover_fim = document.getElementById("remover_fim");

botao_remover_fim.addEventListener("click", function() {
    tarefas.pop();
    mostraLista(tarefas);
});

const formulario_remover = document.getElementById("formulario_remover");

formulario_remover.addEventListener("submit", function(event) {
    event.preventDefault();
    const campoIndice = document.getElementById("indice");
    indice = campoIndice.value;
    campoIndice.value = "";
    campoIndice.focus();

    tarefas.splice(indice, 1);

    mostraLista(tarefas);
});

