//Gerar Link
const numero = document.querySelector("#numero");
const mensagem = document.querySelector("#mensagem")

function gerarLink() {
    let numeroInput = numero.value;
    let numeroFormatado = numeroInput.replace("(", "").replace(")", "").replaceAll(" ", "").replace("-","");

    let espaço = "&text=";

    let mensagemInput = mensagem.value;
    let mensagemFormatada = mensagemInput.replaceAll(" ", "%20")

    if(mensagem.value == "") {
        espaço = "";
    }

    
    if(numero.value == "") {
        console.log("numero não definido");
    } else {
         console.log("https://api.whatsapp.com/send?phone=55" + numeroFormatado + espaço + mensagemFormatada);
}
}




