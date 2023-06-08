
var altura = 0;
var largura = 0;
var vida = 1;
var tempo = 25;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    criaMosquitoTempo = 1200
} else if(nivel === 'chocknorris') {
    function gerarERemoverMosquitos() {
        criaMosquitoTempo = Math.floor(Math.random() * 4)
    
        switch(criaMosquitoTempo) {
            case 0:
                setInterval(function(){
                    geradorDeMosquitos();
               }, 750);
            case 1:
                setInterval(function(){
                    geradorDeMosquitos();
               }, 800);
            case 2:
                setInterval(function(){
                    geradorDeMosquitos();
               }, 1000);
            case 3:
                setInterval(function(){
                    geradorDeMosquitos();
               }, 1100);
            
            break
        }
    }

}


function ajustaPalcoJogo (){
    
    altura = window.innerHeight;
    largura = window.innerWidth;

    //console.log(altura, largura)
};

ajustaPalcoJogo();

var cronometro = setInterval(function(){

    tempo -= 1;

    if( tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);

        window.location.href = 'victory.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000);

function geradorDeMosquitos () {
    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if(vida > 3) {

            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vida).src="imagens/imagens/coracao_vazio.png";

            vida++
        }

        
    }

    //posições randomicas

    var posicaoX = Math.floor((Math.random() * largura) - 90);
    var posicaoY = Math.floor((Math.random() * altura) - 90);

    //console.log(posicaoX, posicaoY)

    if(posicaoX < 0) {
        posicaoX = 0;
    } else if(posicaoY < 0){
        posicaoY = 0;
    } else if(posicaoX < 0 && posicaoY < 0) {
        posicaoX = 0;
        posicaoY = 0;
    }

    //console.log(posicaoX, posicaoY)

    //elemento HTML

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    };

    document.body.appendChild(mosquito);

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}
/*
function gerarERemoverMosquitos() {
    var tempo = Math.floor(Math.random() * 4)

    switch(tempo) {
        case 0:
            setInterval(function(){
                geradorDeMosquitos();
           }, 1000);
        case 1:
            setInterval(function(){
                geradorDeMosquitos();
           }, 1200);
        case 2:
            setInterval(function(){
                geradorDeMosquitos();
           }, 1500);
        case 3:
            setInterval(function(){
                geradorDeMosquitos();
           }, 1700);
        
        break
    }
}

*/