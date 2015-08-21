/**
 * Problem 4. Sort 3 numbers

 Sort 3 real values in descending order.
 Use nested if statements.
 Note: Don’t use arrays and the built-in sorting functionality.
 */
function result4() {
    var a = document.getElementById('problem4A').value;
    var b = document.getElementById('problem4B').value;
    var c = document.getElementById('problem4C').value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    var biggest = a;
    var second = b;
    var third = c;
    if(b > biggest){
        biggest = b;
        second = a;
        if(c > second){
            second = c;
            third = a;
        }
        else{
            third = c;
        }
    }
    if(c > biggest){
        biggest = c;
        second = a;
        if(b > second){
            second = b;
            third = a;
        }
        else{
            third = b;
        }
    }
    else{
        second = c;
        if(b > second){
            second = b;
            third = c;
        }
        else{
            third = b;
        }
    }
    document.getElementById('answer4').innerHTML = biggest + ' ' + second + ' ' + third ;
}