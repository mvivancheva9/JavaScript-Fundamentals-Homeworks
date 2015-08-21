/**
 * Problem 1. Planar coordinates

 Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.
 */

var point1 = { x: 1, y: 2 };
var point2 = { x: 3, y: 1 };
var point3 = { x: 5, y: 6 };
function calculateDistance(point1, point2) {
    var distance = Math.sqrt(
        Math.abs(point2.x - point1.x) * Math.abs(point2.x - point1.x) +
        Math.abs(point2.y - point1.y) * Math.abs(point2.y - point1.y));
    return distance.toFixed(2);
}
var arrLines = [calculateDistance(point1, point2),
    calculateDistance(point2, point3),
    calculateDistance(point1, point3)];
for(var index = 0; index < arrLines.length; index += 1){
    console.log('The distance is: ' + arrLines[index]);
}
console.log('Triangle? ' + triangle(point1, point2, point3));
function triangle(sideA, sideB, sideC) {
    if ((parseFloat(arrLines[0]) + parseFloat(arrLines[1]) > parseFloat(arrLines[2])) &&
        (parseFloat(arrLines[1]) + parseFloat(arrLines[2]) > parseFloat(arrLines[0])) &&
        (parseFloat(arrLines[2]) + parseFloat(arrLines[0]) > parseFloat(arrLines[1]))) {
        return true;
    } else {
        return false;
    }
}