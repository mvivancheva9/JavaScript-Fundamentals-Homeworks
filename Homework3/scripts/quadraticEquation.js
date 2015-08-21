/**
 * Problem 6. Quadratic equation

 Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
 Calculates and prints its real roots.
 Note: Quadratic equations may have 0, 1 or 2 real roots.
 */
function result6() {
    var a = document.getElementById('problem6A').value;
    var b = document.getElementById('problem6B').value;
    var c = document.getElementById('problem6C').value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    var determinant = (b * b) - 4 * a * c;
    var sqrtDeterminant = Math.sqrt(determinant);
    //Checking the determinant for possible solutions of the equation
    if (determinant>0)
    {
        result  = (-b - sqrtDeterminant) / (2 * a) + ' ' + (-b + sqrtDeterminant) / (2 * a);
    }
    else if (determinant == 0)
    {
       result = -b/(2 * a);
    }
    else{
        result = "The equation has no roots";
}
    document.getElementById('answer6').innerHTML = result;
}