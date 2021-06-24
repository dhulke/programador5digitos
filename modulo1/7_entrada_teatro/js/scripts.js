const botaoValidar = document.getElementById("validar");

botaoValidar.addEventListener("click", function() {
    const campoValorInteiro = document.getElementById("valor_inteiro");
    const valorInteiro = parseInt(campoValorInteiro.value);
    const campoIdade = document.getElementById("idade");
    const idade = parseInt(campoIdade.value);

    const campoValor = document.getElementById("valor");

    if(idade <= 8 || idade >= 60) {
        campoValor.innerHTML = valorInteiro / 2;
    } else {
        campoValor.innerHTML = valorInteiro;
    }
});
