var height = 0;
var width = 0;
var life = 1;
var time = 10;

var urlParams = new URLSearchParams(window.location.search);
var level = urlParams.get('level');

switch (level) {
    case "normal":
        time = 30;
        break;
    case "dificil":
        time = 20;
        break;
    case "literalmenteImpossivel":
        time = 10;
        break;
    default:
        time = 10; // Caso padrão
}

//console.log(height, width);

function adjustSize() { // Ajustar Tamanho
    height = window.innerHeight;
    width = window.innerWidth;

    console.log(width, height);
}

adjustSize();

var timer = setInterval(function(){
    time -= 1 // Time = time - 1

    if(time < 0){
        clearInterval(timer); //Para o setInterval
        clearInterval(createMosquito);
        window.location.href = "winnerGame.html"
    } else {
        document.getElementById('timer').innerHTML = time;
    }

    document.getElementById('timer').innerHTML = time
}, 1000);

function randomPosition(){ // Posição Aleatória

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        // Alterar imagem
    if(life > 3){
        //alert('Teste')
        window.location.href = 'endGame.html'
    } else {
        document.getElementById('l' + life).src = 'imagens/coracao_vazio.png';
        life++ // life = life + 1
    }

    }

    var positionX = Math.floor(Math.random() * width) - 90; // Math.random() = Aleatório entre 0 e 1
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY);

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = randomSize() + ' ' + randomPlace();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove(); // Operador que aplica-se ao contexto
    }

    document.body.appendChild(mosquito);
}

function randomSize() { //Tamanho Aleatório
    var classe = Math.floor(Math.random() * 3);

    //console.log(classe);

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }

}

//console.log(randomSize());

randomSize();

function randomPlace() {  //Lugar Aleatorio

    var classe = Math.floor(Math.random() * 2);

    //console.log(classe);

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}