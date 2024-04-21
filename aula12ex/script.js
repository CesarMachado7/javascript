function carregar(){
    var msg = window.document.getElementById("msg")
    var img =  window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/imagem da manha.jpg'
        document.body.style.background = "#BB6137"
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/imagem da tarde.jpg'
        document.body.style.background = "#BBB07B"
        
    }else{
        //BOA NOITE
        img.src = 'imagens/imagem da noite.jpg'
        document.body.style.background = "#3D1E1A"


    }
}
