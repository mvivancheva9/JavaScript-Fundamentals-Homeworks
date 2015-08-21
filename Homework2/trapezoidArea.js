/**
 * Problem 8. Trapezoid area

 Write an expression that calculates trapezoid's area by given sides a and b and height h.
 */
function result8() {
    var result;
    var firstSide = document.getElementById('firstSide').value;
    var secondSide = document.getElementById('secondSide').value;
    var heightTrapezoid = document.getElementById('heightTrapezoid').value;
    var area = ((parseInt(firstSide)+ parseInt(secondSide)) / 2)* parseInt(heightTrapezoid);
    document.getElementById('answer8').innerHTML = 'The area is: ' + area;
}