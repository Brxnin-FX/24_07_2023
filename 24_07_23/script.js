
const btn = document.getElementById("btn");

function calcularNota(nota01 , nota02, nota03){
    let media = (nota01+nota02+nota03)/3;

    return media;

}

function exibirResultado(){
    let nota01 = parseInt(document.getElementById("nota01").value);
    let nota02 = parseInt(document.getElementById("nota02").value);
    let nota03 = parseInt(document.getElementById("nota03").value);
    let media = calcularNota(nota01 , nota02, nota03);
    let nome = document.getElementById("nomeInput").value;
    let resultado = document.getElementById("result");
    resultado.innerText = "Nota de " + nome +" "+ (media.toFixed(2));;
}

btn.addEventListener("click", exibirResultado)