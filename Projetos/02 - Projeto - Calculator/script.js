function calculate(type, value){
    //console.log(type, value)

    if(type === 'action'){

        if(value === 'c'){
            document.getElementById('result').value = '';
        }

        if(value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
            document.getElementById('result').value += value;''
        }

        if(value === '='){
            var valueCamp = eval(document.getElementById('result').value)
            document.getElementById('result').value = valueCamp-=''
        }

    } else if (type === 'worth'){

        document.getElementById('result').value += value;

    }

}