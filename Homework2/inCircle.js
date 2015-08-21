/**
 * Problem 6. Point in Circle

 Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius
 */
function result6() {
    var result;
    var x = document.getElementById('coordX').value;
    var y = document.getElementById('coordY').value;
    var isInside = (x * x) + (y * y) <= (5 * 5);
    if (isInside == true)
    {
        result = 'true';
    }
    else
        result = 'false';
    document.getElementById('answer6').innerHTML = result;
}