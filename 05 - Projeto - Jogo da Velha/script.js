// Dados Iniciais

let square = {
    a1:'',a2:'',a3:'',
    b1:'',b2:'',b3:'',
    c1:'',c2:'',c3:''
};

let player = '';

let warning = '';

let playing = false;

reset();

// Eventos

document.querySelector('.reset').addEventListener('click', reset);

//document.querySelector('div[data-item-a1]').addEventListener('click', itemClick);

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})

// Funções

function itemClick(event){

    let item = event.target.getAttribute('data-item');
    //console.log(item);

    if(playing && square[item] === ''){
        square[item] = player;
        renderSquare();
        togglePlayer();
    }

}

function reset(){
    warning = '';

    let random = Math.floor(Math.random * 2);
    //Math.floor = Arredonda para baixo

    if(random === 0){
        player = 'X';
    } else {
        player = 'O';
    }

    //player = (random === 0) ? 'X' : 'O';
    
    for(let i in square){
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();

}

function renderSquare(){

    for(let i in square){

        let item = document.querySelector(`div[data-item=${i}]`);

        if(square[i] !== ''){
            item.innerHTML = square[i]
        } else {
            item.innerHTML = '';
        }

    }

    checkGame();

}

function renderInfo(){

    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;

}

function togglePlayer(){

    if(player === 'X'){
        player = 'O';
    } else {
        player = 'X';
    }

    //player = (player === 'X') ? 'O' : 'X'

    renderInfo();

}

function checkGame(){

    if(checkWinner('X')){
        warning = '"X" ganhou'
        playing = false;
    } else if (checkWinner('O')){
        warning = '"O" ganhou'
        playing = false;
    } else if (tie()){
        warning = 'EMPATE !'
        playing = false;
    }

}

function checkWinner(player){

    let pos = [

        // Horizontal
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        // Vertical
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        // Diagonal
        'a1,b2,c3',
        'a3,b2,c1'

    ]

    for(let w in pos){

        let pArray = pos[w].split(',');

        let hasWon = pArray.every(option => square[option] === player)

        if(hasWon){
            return true
        }

    }

    return false

}

function tie(){ // Empate

    for(let i in square){
        if (square[i] === ''){
            return false;
        }
    }
    return true;

}