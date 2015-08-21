/**
 * Problem 2. Remove elements

 Write a function that removes all elements with a given value.
 Attach it to the array type.
 Read about prototype and how to attach methods.

 var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
 arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
 */
Array.prototype.remove = function(value) {
    while (this.indexOf(value) >= 0) {
        this.splice(this.indexOf(value), 1);
    }
    return this;
};
var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'],
    element = 1,
    result,
    i,
    len;
result = 'Array after removing: ';

if (!isNaN(element)) {
    result += arr.remove(element * 1);
} else {
    result += arr.remove(element);
}
console.log('Problem 2: ' + result);