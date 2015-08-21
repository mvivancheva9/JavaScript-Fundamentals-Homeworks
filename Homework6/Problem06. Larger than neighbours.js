/**
 * Problem 6. Larger than neighbours

 Write a function that checks if the element at given
 position in given array of integers is bigger than its two neighbours (when such exist).
 */
var arr = [1, 2, 3, 4, 3, 7, 8, 9, 3],
    position = 1,
    index = position - 1,
    arrLen = arr.length,
    result;
function bigger(arr, position) {
    if (index > 0 && position < arrLen - 1) {
        if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
            result = 'The integer on position ' + position + ' is bigger than both neighbours';
        }
        else{
            result = 'The integer on position ' + position + ' is not bigger than both neighbours'
        }
    }
    if (index === 0) {
            if (arr[index] > arr[index + 1]) {
                result = 'The integer on position ' + position + ' is bigger than its right neighbour';
            }
        else{
                result = 'The integer on position ' + position + ' is not bigger than its right neighbour';
            }
    }
    if (position === arrLen - 1) {
            if (arr[index] > arr[index - 1]) {
                result = 'The integer on position ' + position + ' is bigger than its left neighbour';
            }
        else{
                result = 'The integer on position ' + position + ' is not bigger than its left neighbour'
            }
        }
    return result;
}
    bigger(arr, position);