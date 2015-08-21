/**
 * Problem 5. Third bit

 Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0.
 */
function result5() {
    var result;
    var p = 3;
    var num = document.getElementById('thirdBit').value;
    result = (num >> p) & 1;
    document.getElementById('answer5').innerHTML = result;
}