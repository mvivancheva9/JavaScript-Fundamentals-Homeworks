/**
 * Problem 1. Exchange if greater

 Write an if statement that takes two double variables a and b and exchanges their values if the first one
 is greater than the second.
 As a result print the values a and b, separated by a space.
 */
function result() {
    var num1 = document.getElementById('firstNumber').value;
    var num2 = document.getElementById('secondNumber').value;
    var max = num1;
    if (num2 > max){
        max = num2;
        document.getElementById('answer1').innerHTML = num1 + ' ' + max;
    }
    else{
        document.getElementById('answer1').innerHTML = num2 + ' ' + max;
    }
}