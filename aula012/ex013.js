var agora = new Date()
var Diasem = agora.getDay()

switch(Diasem){
    case 0:
        console.log('Domingo')
        break
        case 1:
        console.log('Segunda')
        break
        case 2:
        console.log('Terca')
        break
        case 3:
        console.log('Quarta')
        break
        default:
            console.log('Erro')
            break
}


