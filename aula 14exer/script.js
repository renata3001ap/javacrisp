function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.scr = "imagens/sol.png"
        document.body.style.background = '#e9a321'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.scr = "imagens/tarde2.png"
        document.body.style.background = '#fdb49b'
    } else {
        //Boa noite!
        img.scr = "imagens/noite.png"
        document.body.style.background = '#1a4985'
    }
}
