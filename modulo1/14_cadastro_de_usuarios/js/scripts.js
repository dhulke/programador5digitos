const usuarios = [];

mostraRegistros();

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    const campoEmail = document.getElementById("email");
    const email = campoEmail.value;

    if(!nome || !email) {
        return;
    }

    const nomeCapitalizado = capitalizar(nome);

    const contador = pegaContador();

    const registro = {id: contador, nome: nomeCapitalizado, email: email};

    salvaRegistro(registro);

    incrementaContador();

    mostraRegistros();    
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

function pegaContador() {
    const contador = localStorage.getItem("contador");
    if(contador) {
        const contadorInt = parseInt(contador);
        return contadorInt;
    } else {
        return 1;
    }
}

function incrementaContador() {
    const contador = pegaContador();
    localStorage.setItem("contador", contador + 1);
}

function pegaRegistros() {
    let registros = localStorage.getItem("registros");
    if(registros) {
        registros = JSON.parse(registros);
        return registros;
    } else {
        return [];
    }
}

function salvaRegistro(registro) {
    let registros = pegaRegistros();
    if(registros.length > 0) {
        registros.push(registro);
    } else {
        registros = [registro];
    }
    salvaRegistros(registros);
}

function salvaRegistros(registros) {
    const registrosString = JSON.stringify(registros);
    localStorage.setItem("registros", registrosString);
}

function mostraRegistros() {
    const registros = pegaRegistros();

    let listaUsuarios = "";
    for(const i in registros) {
        const registro = registros[i];
        let cor = 'white';
        if(i % 2 == 0) {
            cor = '#ccc';
        }
        listaUsuarios += `<tr style="background-color: ${cor}">
                            <td>${registro['id']}</td>
                            <td>${registro['nome']}</td>
                            <td>${registro['email']}</td>
                            <td><input type="button" value="Remover" onclick="removerRegistro(${registro['id']})"></td></tr>`;
    }

    const tbody = document.querySelector('#usuarios_cadastrados tbody');
    tbody.innerHTML = listaUsuarios;
}

function removerRegistro(id) {
    let registros = pegaRegistros();
    for(const i in registros) {
        if(registros[i]['id'] == id) {
            registros.splice(i, 1);
            salvaRegistros(registros);
            mostraRegistros();
            return;
        }
    }
}

function removerTudo() {
    localStorage.clear();
    mostraRegistros();
}
