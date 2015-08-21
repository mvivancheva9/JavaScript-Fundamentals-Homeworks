/**
 * Problem 2. Multiplication Sign

 Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.
 */
function result2() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result;
    var minusSign = 0;
    if (a < 0){
        minusSign +=1;
    }
    if(b < 0){
        minusSign +=1;
    }
    if(c < 0){
        minusSign +=1;
    }
    if(parseInt(a)===0 || parseInt(b)===0 ||parseInt(c)===0){
        result = 0;
    }
    else if(minusSign % 2 == 0){
        result = '+';
    }
    else if(minusSign % 2 == 1){
        result = '-';
    }
    document.getElementById('answer2').innerHTML = result;
}