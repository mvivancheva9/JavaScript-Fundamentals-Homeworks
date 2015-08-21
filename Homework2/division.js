/**
 * Problem 2. Divisible by 7 and 5

 Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
 */
function result2() {
    var result;
    var num = document.getElementById('problem2').value;
    if(num % 5 == 0 & num % 7 == 0){
        result = 'true';
    }
    else{
        result = 'false';
    }
    document.getElementById('answer2').innerHTML = result;
}