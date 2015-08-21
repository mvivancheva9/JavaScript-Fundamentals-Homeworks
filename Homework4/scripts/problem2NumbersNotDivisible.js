/**
 * Problem 2. Numbers not divisible

 Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
 */
function problem2(){
    var n = document.getElementById('inputProblem2').value,
        index;
    n = +n;
    for(index = 1; index <= n; index += 1){
        if(!(index%3 === 0) || !(index%7 === 0)){
            document.getElementById('result2').innerHTML += index + ' ';
        }
    }
}