function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() // ano atual (FullYear ' que dizer que vai pegar 4 digito)
    var fano = window.document.getElementById('txtano') // pegar o dado do ano do fomulario
    var res = window.document.querySelector('div#res') //e o resulado id='res'
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id' , 'foto')

        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 5){
                //bebe
                img.setAttribute('src', 'fotobebemenino.png')
            } else if (idade >= 5 && idade < 14){
                //criança
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade >= 14 && idade < 21) {
                //adolecente
                img.setAttribute('src', 'fotoadmenino.png')
            } else if (idade >= 21 && idade < 45) {
                // adulto
                img.setAttribute('src', 'fotohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'avohomem.jpg')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'fotobebemenina.png')
            } else if (idade >= 5 && idade <14){
                //criança
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade >= 14 && idade < 21) {
                //adolecente
                img.setAttribute('src', 'fotoadmenina.png')
            } else if (idade >= 21 && idade < 45) {
                // adulto
                img.setAttribute('src', 'fotomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoavofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} Idade calculada: ${idade}`
        res.appendChild(img)

    }
}