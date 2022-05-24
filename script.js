var altura = 0
var largura = 0

function ajustaTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTela()

function randomPosition() {
    var Xposition = Math.floor(Math.random() * largura - 120)
    var yposition = Math.floor(Math.random() * altura - 120)

    Xposition = Xposition < 0 ? 0 : Xposition
    yposition = yposition < 0 ? 0 : yposition

    //elemento html
    var mosca = document.createElement('img')
    mosca.src = 'assets/imagens/mosca.png'
    mosca.className = 'mosca1'
    mosca.style.left = Xposition + 'px'
    mosca.style.top = yposition + 'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)
}

