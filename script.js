function carregar() {
    atualizarHora();
    animarAtualizacaoHora();
}

function animarAtualizacaoHora() {
    requestAnimationFrame(animarAtualizacaoHora);
    atualizarHora();
}

function atualizarHora() {

    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora =data.getHours();

    msg.innerHTML = `São exatamente ${hora}:${data.getMinutes() < 10 ? '0' : ''}${data.getMinutes()}`;

    if (hora >= 0 && hora < 6) {

        img.src = 'imagens/fotomadrugadaedit.png'
        document.body.style.background = '#241731'
    } else if (hora >= 6 && hora < 12) {

        img.src = 'imagens/fotomanhaedit.png'
        document.body.style.background = '#80C6FA'
    } else if (hora >= 12 && hora < 18) {

        img.src = 'imagens/fototardeedit.png'
        document.body.style.background = '#2C93A4'
    } else {

        img.src = 'imagens/fotonoiteedit.png'
        document.body.style.background = '#26465D'
    }
}