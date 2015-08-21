/**
 * Problem 1. Reverse string

 Write a JavaScript function that reverses a string and returns it.
 Example:

 input	output
 sample	elpmas
 */
var str = 'sample';
var output = '',
    i;
for(i = str.length - 1; i > - 1; i -= 1){
    output += (str[i]);
}
console.log(output);