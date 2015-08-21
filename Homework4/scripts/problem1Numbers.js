/**
 * Problem 1. Numbers

 Write a script that prints all the numbers from 1 to N.
 */
function problem1(){
    var n = document.getElementById('inputProblem1').value,
        index;
    n = +n;
    for(index = 1; index<=n; index += 1){
        document.getElementById('result1').innerHTML += index + ' ';
    }
}