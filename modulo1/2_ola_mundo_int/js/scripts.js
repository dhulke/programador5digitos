const botaoSomar = document.getElementById("somar");

botaoSomar.addEventListener("click", function() {
    const campoNumero1 = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero1.value);
    const campoNumero2 = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero2.value);
    const campoResultado = document.getElementById("resultado");
    const resultado = numero1 + numero2;
    campoResultado.innerHTML = `O resultado da soma é ${resultado}`;
});
