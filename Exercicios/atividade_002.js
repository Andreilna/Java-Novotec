function addTwoNumbers(num1, num2){
    num1 = parseFloat (num1)
    num2 = parseFloat (num2)

    var sum = num1 + num2;
    return sum;
}

var num1 = prompt('Digite um número:');
var num2 = prompt('Digite outro número:');
var sums = addTwoNumbers(num1, num2);

document.write("A soma é igual a " + sums + ".") 