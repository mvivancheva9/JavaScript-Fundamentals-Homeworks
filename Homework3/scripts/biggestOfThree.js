/**
 * Problem 3. The biggest of Three

 Write a script that finds the biggest of three numbers.
 Use nested if statements.
 */
function result3() {
    var a = document.getElementById('numA').value;
    var b = document.getElementById('numB').value;
    var c = document.getElementById('numC').value;
    var biggest = a;
    if(b > biggest){
        biggest = b;
    }
    if(c > biggest){
        biggest = c;
    }
    document.getElementById('answer3').innerHTML = biggest;

}