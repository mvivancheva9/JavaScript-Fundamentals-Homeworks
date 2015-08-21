/**
 * Problem 3. Rectangle area

 Write an expression that calculates rectangle’s area by given width and height.
 */
function result3() {
    var result;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var area = width * height;
    document.getElementById('answer3').innerHTML = 'The area is: ' + area;
}