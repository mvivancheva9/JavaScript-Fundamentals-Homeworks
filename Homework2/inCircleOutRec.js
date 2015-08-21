/**
 * Problem 9. Point in Circle and outside Rectangle

 Write an expression that checks for given point
 P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
 */
function result9() {
    var result;
    var x = document.getElementById('coordXRec').value;
    var y = document.getElementById('coordYRec').value;
    var isTrue = (((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 9)
        && ((x < -1) || ((x >= -1) && ((y <= -1) || (y >= 1))));
    if (isTrue == true)
    {
        result = 'yes';
    }
    else
        result = 'no';
    document.getElementById('answer9').innerHTML = result;
}