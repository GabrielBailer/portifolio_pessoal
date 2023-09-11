
function abrirCaixaDeMensagem() {
    var destinatario = "gabrielbailer800@gmail.com";
    var assunto = "Olá gostaria de conversar!";
    var corpo = "Vamos marcar uma entrevista?";

    var mailtoLink = "mailto:" + destinatario + "?subject=" + assunto + "&body=" + corpo;

    window.open(mailtoLink, "_blank");
}