var altura = 0
var largura = 0
var heart = 1
var time = 10
var criaMoscaTempo = 1500

var nivel = window.location.search.replace('?', '')

if(nivel === 'facil'){
    criaMoscaTempo = 1500
}
if(nivel === 'normal'){
    criaMoscaTempo = 1000
}
if(nivel === 'dificil'){
    criaMoscaTempo = 750
}

function ajustaTela() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTela()

var cronometro = setInterval(function () {
    time -= 1

    if (time < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = time
    }
}, 1000)

function randomPosition() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (heart >= 3) {
            window.location.href = 'endgame.html'
        } else {
            document.getElementById('v' + heart).src = 'assets/imagens/coracao_vazio.png'
            heart++
        }
    }

    var Xposition = Math.floor(Math.random() * largura - 120)
    var yposition = Math.floor(Math.random() * altura - 120)

    Xposition = Xposition < 0 ? 0 : Xposition
    yposition = yposition < 0 ? 0 : yposition

    //elemento html
    var mosca = document.createElement('img')
    mosca.src = 'assets/imagens/mosca.png'
    mosca.className = randomSize() + ' ' + randomSide()
    mosca.style.left = Xposition + 'px'
    mosca.style.top = yposition + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca)
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'

    }
}

