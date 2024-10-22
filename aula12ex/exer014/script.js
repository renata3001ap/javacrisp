function carregar(){
    var msg = window.document.getElementById('mgs')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (horas >= 0 && hora <12) {
        //bom dia!
        img.src = 'imagens/dia.png'
    } else if (hora >= 12 && horas < 18 ) {
        //boa tarde!
        img.src = 'imagens/tarde2.png'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
    }
}