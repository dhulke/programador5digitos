let tabuleiro = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];
let proximaMarca = "x";
let numeroJogadas = 0;

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        const celula = document.getElementById(`celula_${i}_${j}`);

        celula.addEventListener("click", function(event) {
            if(!tabuleiro[i][j]) {
                celula.innerHTML = `<img src="img/${proximaMarca}.png">`;
                tabuleiro[i][j] = proximaMarca;
                proximaMarca = proximaMarca == "x" ? "o" : "x";
                numeroJogadas++;
                checaVencedor();
            }
        });
    }
}

const celula_0_0 = document.getElementById("celula_0_0");
const celula_0_1 = document.getElementById("celula_0_1");
const celula_0_2 = document.getElementById("celula_0_2");
const celula_1_0 = document.getElementById("celula_1_0");
const celula_1_1 = document.getElementById("celula_1_1");
const celula_1_2 = document.getElementById("celula_1_2");
const celula_2_0 = document.getElementById("celula_2_0");
const celula_2_1 = document.getElementById("celula_2_1");
const celula_2_2 = document.getElementById("celula_2_2");

function checaVencedor() {
    const cor = "#53a617";

    if(tabuleiro[0][0] == "x" && tabuleiro[0][1] == "x" && tabuleiro[0][2] == "x"
    || tabuleiro[0][0] == "o" && tabuleiro[0][1] == "o" && tabuleiro[0][2] == "o") {
        celula_0_0.style = `background-color: ${cor}`;
        celula_0_1.style = `background-color: ${cor}`;
        celula_0_2.style = `background-color: ${cor}`;
        vencedor(tabuleiro[0][0]);
    } else if(tabuleiro[1][0] == "x" && tabuleiro[1][1] == "x" && tabuleiro[1][2] == "x"
        || tabuleiro[1][0] == "o" && tabuleiro[1][1] == "o" && tabuleiro[1][2] == "o") {
        celula_1_0.style = `background-color: ${cor}`;
        celula_1_1.style = `background-color: ${cor}`;
        celula_1_2.style = `background-color: ${cor}`;
        vencedor(tabuleiro[1][0]);
    } else if(tabuleiro[2][0] == "x" && tabuleiro[2][1] == "x" && tabuleiro[2][2] == "x"
        || tabuleiro[2][0] == "o" && tabuleiro[2][1] == "o" && tabuleiro[2][2] == "o") {
        celula_2_0.style = `background-color: ${cor}`;
        celula_2_1.style = `background-color: ${cor}`;
        celula_2_2.style = `background-color: ${cor}`;
        vencedor(tabuleiro[2][0]);
    } else if(tabuleiro[0][0] == "x" && tabuleiro[1][0] == "x" && tabuleiro[2][0] == "x"
        || tabuleiro[0][0] == "o" && tabuleiro[1][0] == "o" && tabuleiro[2][0] == "o") {
        celula_0_0.style = `background-color: ${cor}`;
        celula_1_0.style = `background-color: ${cor}`;
        celula_2_0.style = `background-color: ${cor}`;
        vencedor(tabuleiro[0][0]);
    } else if(tabuleiro[0][1] == "x" && tabuleiro[1][1] == "x" && tabuleiro[2][1] == "x"
        || tabuleiro[0][1] == "o" && tabuleiro[1][1] == "o" && tabuleiro[2][1] == "o") {
        celula_0_1.style = `background-color: ${cor}`;
        celula_1_1.style = `background-color: ${cor}`;
        celula_2_1.style = `background-color: ${cor}`;
        vencedor(tabuleiro[0][1]);
    } else if(tabuleiro[0][2] == "x" && tabuleiro[1][2] == "x" && tabuleiro[2][2] == "x"
        || tabuleiro[0][2] == "o" && tabuleiro[1][2] == "o" && tabuleiro[2][2] == "o") {
        celula_0_2.style = `background-color: ${cor}`;
        celula_1_2.style = `background-color: ${cor}`;
        celula_2_2.style = `background-color: ${cor}`;
        vencedor(tabuleiro[0][2]);
    } else if(tabuleiro[0][0] == "x" && tabuleiro[1][1] == "x" && tabuleiro[2][2] == "x"
        || tabuleiro[0][0] == "o" && tabuleiro[1][1] == "o" && tabuleiro[2][2] == "o") {
        celula_0_0.style = `background-color: ${cor}`;
        celula_1_1.style = `background-color: ${cor}`;
        celula_2_2.style = `background-color: ${cor}`;
        vencedor(tabuleiro[0][0]);
    } else if(tabuleiro[0][2] == "x" && tabuleiro[1][1] == "x" && tabuleiro[2][0] == "x"
        || tabuleiro[0][2] == "o" && tabuleiro[1][1] == "o" && tabuleiro[2][0] == "o") {
        celula_0_2.style = `background-color: ${cor}`;
        celula_1_1.style = `background-color: ${cor}`;
        celula_2_0.style = `background-color: ${cor}`;
        vencedor(tabuleiro[0][2]);
    } else if(numeroJogadas == 9) {
        vencedor("Ninguém");
    }
}

function vencedor(marcaVencedor) {
    
    setTimeout(function() {

        alert(`${marcaVencedor} ganhou!`);

        celula_0_0.innerHTML = "";
        celula_0_1.innerHTML = "";
        celula_0_2.innerHTML = "";
        celula_1_0.innerHTML = "";
        celula_1_1.innerHTML = "";
        celula_1_2.innerHTML = "";
        celula_2_0.innerHTML = "";
        celula_2_1.innerHTML = "";
        celula_2_2.innerHTML = "";

        celula_0_0.style = "";
        celula_0_1.style = "";
        celula_0_2.style = "";
        celula_1_0.style = "";
        celula_1_1.style = "";
        celula_1_2.style = "";
        celula_2_0.style = "";
        celula_2_1.style = "";
        celula_2_2.style = "";

        tabuleiro = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ];
        proximaMarca = "x";
        numeroJogadas = 0;
    }, 1);

}