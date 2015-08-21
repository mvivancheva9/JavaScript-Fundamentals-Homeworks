/**
 * Problem 2. Reverse number

 Write a function that reverses the digits of given decimal number.
 Example:

 input	output
 256	652
 123.45	54.321
 */
var number = 123.45;
var n = number.toString(),
    index,
    reversed = '',
    nLen = n.length;
reverse(n);
function reverse(n){
    for(index = nLen - 1; index > -1; index -= 1){
        reversed += n[index];
    }
    return reversed;
}
