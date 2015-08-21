/**
 * Problem 1. Odd or Even

 Write an expression that checks if given integer is odd or even.
 */
function result() {
    var result;
    var num = document.getElementById('problem1').value;
    if(num % 2 == 0){
        result = 'Even';
    }
    else{
        result = 'Odd';
    }
    document.getElementById('answer1').innerHTML = num + ' is ' + result;
}