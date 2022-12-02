//Gerar Link
const numero = document.querySelector("#numero");
const mensagem = document.querySelector("#mensagem")

function gerarLink() {
    const numeroInput = numero.value;
    const numeroFormatado = numeroInput.replace("(", "").replace(")", "").replaceAll(" ", "").replace("-","");

    let espaço = "&text=";

    const mensagemInput = mensagem.value;
    const mensagemFormatada = mensagemInput.replaceAll(" ", "%20")

    if(mensagem.value == "") {
        espaço = "";
    }

    if(numeroFormatado.length != 11){
        mostrarErro();
        
    } else {
    const link ="https://api.whatsapp.com/send?phone=55" + numeroFormatado + espaço + mensagemFormatada;

    $('.formulario').css("display", "none");
    $('.input-link').css("display", "flex");
    $("#link").val(link);
    $('#botao-gerar').css("display", "none");
    $('#botao-copiar-link').css("display", "inline-block");
    $('#botao-gerar-outro').css("display", "inline-block");;
    } 
}

function mostrarErro(){
    let erro = document.querySelector('.erro');
    erro.style.opacity = "1";
    erro.style.display = "flex";

    setTimeout(() => {
        erro.style.opacity = "0";
        setTimeout(() => {
            erro.style.display = "none"
        }, 500)
    }, 1500 )
}

function copyText() {
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

function gerarOutroLink(){
    $('.formulario').css("display", "block");
    $('.input-link').css("display", "none");
    $('#link').val("");
    $('#numero').val("");
    $('#mensagem').val("");
    $('#botao-gerar').css("display", "block");
    $('#botao-copiar-link').css("display", "none");
    $('#botao-gerar-outro').css("display", "none");;
    
}
