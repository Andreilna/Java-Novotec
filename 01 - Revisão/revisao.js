//  alert('Sejam bem vindos!');

//  Variaveis
//  Number (Float / Int), String, Booleam

///////////////////////////////////////////////
//  String

//  var
//  let
//  const
///////////////////////////////////////////////

/*
var text = 'Novotec';

///////////////////////////////////////////////
//  Number = Float / Int

var numberIntiner = -7; // Int
var fraction = 10.75; // Float
///////////////////////////////////////////////
//  Boolean

var test = true; // ou false
///////////////////////////////////////////////

document.write(text);
document.write(numberIntiner);
document.write(fraction);

///////////////////////////////////////////////
//  Agrupamento

document.write(`<br>`);
document.write(`<br>`);
document.write(`Sejam bem vindos ${text}! <br>`); // Interpolação
document.write("Sejam bem vindos " + text + "!"); // Concatenação
///////////////////////////////////////////////

var text = 'Alunos';

document.write(`<br>`);
document.write(`Sejam bem vindos ${text}! <br>`); 

//  null | underfine

var name = null; // Ausencia intencional
*/

//  underfine = Erro de programação

//  Funções

/*
function calcularAreaTerreno(largura, comprimento){
    // parsefloat

    largura = parseFloat(largura);
    comprimento = parseFloat(comprimeto);

    var area =  largura * comprimento; // VOID
    return area;
}

//calcularAreaTerreno(15, 25);

document.write("O terreno possui " + calcularAreaTerreno(15, 25) + " metros")

document.write(`<hr>`);

var largura = prompt('Digite a largura:');
var comprimento = prompt('Digite o comprimento:');
var terreno = calcularAreaTerreno(largura, comprimento);

document.write("O terreno possui " + terreno + " metros")
*/

function acao(){

    var button = document.querySelector('div.eventos');
    button.style.background = 'blue';

    //alert('Evento disparado')
}

var changeColor = document.querySelector('div.eventos');
changeColor.style.background = 'black';

var body = document.body
body.style.background = 'aquamarine';

var title = document.getElementsByTagName('h1')[0];
body.style.color = 'white';