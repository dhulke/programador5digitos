const botaoApresentar = document.getElementById("apresentar");

botaoApresentar.addEventListener("click", function() {
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    const campoApresentacao = document.getElementById("apresentacao");
    campoApresentacao.innerHTML = `Olá ${nome}, bem vindo ao curso`;
});
