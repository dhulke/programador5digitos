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

const botaoSubtrair = document.getElementById("subtrair");

botaoSubtrair.addEventListener("click", function() {
    const campoNumero1 = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero1.value);
    const campoNumero2 = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero2.value);
    const campoResultado = document.getElementById("resultado");
    const resultado = numero1 - numero2;
    campoResultado.innerHTML = `O resultado da subtração é ${resultado}`;
});

const botaoMultiplicar = document.getElementById("multiplicar");

botaoMultiplicar.addEventListener("click", function() {
    const campoNumero1 = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero1.value);
    const campoNumero2 = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero2.value);
    const campoResultado = document.getElementById("resultado");
    const resultado = numero1 * numero2;
    campoResultado.innerHTML = `O resultado da multiplicação é ${resultado}`;
});

const botaoDividir = document.getElementById("dividir");

botaoDividir.addEventListener("click", function() {
    const campoNumero1 = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero1.value);
    const campoNumero2 = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero2.value);
    const campoResultado = document.getElementById("resultado");
    const resultado = numero1 / numero2;
    campoResultado.innerHTML = `O resultado da divisão é ${resultado}`;
});
