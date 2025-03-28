//document.getElementById('textBox').focus()

function activeCamp(){
    var box = document.querySelector('input#textBox')

    //box.style.background = 'yellow';

    document.querySelector('input#textBox').style.background = 'yellow';
}

function validationCamp(){
    var valueCamp = document.getElementById('textBox').value; // value = Capturar o valor do input

    // Length = Contar a quantidade de caracteres

    // document.write(valueCamp);

    if(valueCamp.length <= 3){
        document.querySelector('input#textBox').style.background = 'red';
    } else {
        document.querySelector('input#textBox').style.background = 'green';
    }
}