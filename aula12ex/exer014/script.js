function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (horas >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'imagens.sol.png'
    } else if ( hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'imagens.tarde2.png'
    } else {
        //Boa noite!
        img.src = 'imagens.noite.png'
    }
}