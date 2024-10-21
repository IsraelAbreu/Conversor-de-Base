const botao = document.getElementById("botao");
const inputNumero = document.getElementById("numero");
const seletorBaseAtual = document.querySelector("#base-atual");
const seletorBaseFinal = document.querySelector("#base-final");
const divResultado = document.getElementById("resultado");

botao.addEventListener("click", ()=>{
    let numeroFinal
    const numeroAtual = +inputNumero.value;
    const baseAtual = seletorBaseAtual.value;
    const baseFinal = seletorBaseFinal.value;

    if (baseAtual === baseFinal) {
        numeroFinal = numeroAtual;
    } else if (baseAtual === "Decimal") {
        numeroFinal = numeroAtual.toString(2);
    }

    console.log(`Base atual: ${baseAtual} Base final: ${baseFinal}, número: ${numeroFinal}`);
    
})