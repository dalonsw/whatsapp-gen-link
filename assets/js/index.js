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
    $('#botao-gerar-outro').css("display", "inline-block");
    $('.aviso').css("display", "none");
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
    $('.link-copiado').css("display", "block");
  }

function gerarOutroLink(){
    $('.formulario').css("display", "block");
    $('.input-link').css("display", "none");
    $('#link').val("");
    $('#numero').val("");
    $('#mensagem').val("");
    $('#botao-gerar').css("display", "block");
    $('#botao-copiar-link').css("display", "none");
    $('#botao-gerar-outro').css("display", "none");
    $('.aviso').css("display", "block");
    $('#wpp-header-number').text("(XX) X XXXX-XXXX");
    $('#balao-fala-wpp p').text("Sua mensagem aparecerá aqui!")
    $('#balao-fala-wpp p').css("color", "#707070");
    $('.link-copiado').css("display", "none");
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

function abrirMenu(){
    $(".menu-navegacao").css("display", "flex")
    unloadScrollBars()
}

function fecharMenu(){
    $(".menu-navegacao").css("display", "none")
    reloadScrollBars()
}

