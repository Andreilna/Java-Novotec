function textBox(){
    document.querySelector('input.box').style.background = 'yellow';
}

function textBox2(){
    var valueCamp = document.getElementById('box').value;

    if (valueCamp.length <= 3){
        document.querySelector('input.box').style.background = 'red';
    } else {
        document.querySelector('input.box').style.background = 'green';
    }

}
