const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function() {
    const campoTabuada = document.getElementById("tabuada");
    const tabuada = parseInt(campoTabuada.value);
    const campoAte = document.getElementById("ate");
    const ate = parseInt(campoAte.value);
    const campoResultado = document.getElementById("resultado");

    let resultado = "";
    for(let i = 0; i <= ate; i++) {
        const multiplicacao = tabuada * i;
        resultado += `${tabuada}x${i} = ${multiplicacao}<br>`;
    }
    
    campoResultado.innerHTML = resultado;
});
