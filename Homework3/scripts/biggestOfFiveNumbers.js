/**
 * Problem 7. The biggest of five numbers

 Write a script that finds the greatest of given 5 variables.
 Use nested if statements.
 */
function result7() {
    var a = document.getElementById('problem7A').value;
    var b = document.getElementById('problem7B').value;
    var c = document.getElementById('problem7C').value;
    var d = document.getElementById('problem7D').value;
    var e = document.getElementById('problem7E').value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    d = parseFloat(d);
    e = parseFloat(e);
    var biggest = a;
    if(b > biggest){
        biggest = b;
    }
    if(c > biggest){
        biggest = c;
    }
    if(d > biggest){
        biggest = d;
    }
    if(e > biggest){
        biggest = e;
    }
    document.getElementById('answer7').innerHTML = biggest;

}