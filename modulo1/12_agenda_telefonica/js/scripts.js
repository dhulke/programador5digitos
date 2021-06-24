const contatos = [];

const formulario_cadastro = document.getElementById("formulario_cadastro");

formulario_cadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    const campoTelefone = document.getElementById("telefone");
    const telefone = campoTelefone.value;

    if(!nome || !telefone) {
        return;
    }

    const nomeCapitalizado = capitalizar(nome);

    const registro = `${nomeCapitalizado} - ${telefone}`;

    contatos.push(registro);

    let listaContatos = "";
    for(const indice in contatos) {
        listaContatos += `<div class="contato">${contatos[indice]}</div>`;
    }

    const campoContatos = document.getElementById("contatos");
    campoContatos.innerHTML = listaContatos;
});

function capitalizar(nome) {
    const nomes = nome.split(" ");
    for(const indice in nomes) {
        const primeiraLetra = nomes[indice].charAt(0);
        const primeiraLetraMaiuscula = primeiraLetra.toUpperCase();
        const nomeSemPrimeiraLetra = nomes[indice].slice(1);
        nomes[indice] = primeiraLetraMaiuscula + nomeSemPrimeiraLetra;
    }
    const nomeString = nomes.join(" ");
    return nomeString;
}

const formulario_pesquisa = document.getElementById("formulario_pesquisa");

formulario_pesquisa.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoTermo = document.getElementById("termo");
    const termo = campoTermo.value;
    
    const contatos_para_mostrar = [];

    if(termo) {
        const termoMinusculo = termo.toLowerCase();

        for(const contato of contatos) {
            const contatoMinusculo = contato.toLowerCase();
            if(contatoMinusculo.includes(termoMinusculo)) {
                contatos_para_mostrar.push(contato);
            }
        }
    } else {
        contatos_para_mostrar = contatos;
    }

    let listaContatos = "";
    for(const indice in contatos_para_mostrar) {
        listaContatos += `<div class="contato">${contatos_para_mostrar[indice]}</div>`;
    }

    const campoContatos = document.getElementById("contatos");
    campoContatos.innerHTML = listaContatos;
});