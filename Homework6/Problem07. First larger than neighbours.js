/**
 * Problem 7. First larger than neighbours

 Write a function that returns the index of the first element in array that is
 larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.
 */
var arr = [1, 2, 3, 4, 5, 7, 8, 9, 9],
    index,
    arrLen = arr.length,
    position,
    result;
function bigger(arr) {
    for (index = 0; index < arrLen; index += 1) {
        position = index + 1;
        if (index === 0) {
            if (arr[index] > arr[index + 1]) {
                result = 'The integer on position ' + position + ' is bigger than its right neighbour';
                break;
            }
        }
        else if (index > 0 && index < arrLen - 1) {
            if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
                result = 'The integer on position ' + position + ' is bigger than both neighbours';
                break;
            }
        }
        else if (index === arrLen - 1) {
            if (arr[index] > arr[index - 1]) {
                result = 'The integer on position ' + position + ' is bigger than its left neighbour';
                break;
            }
            else {
                result = -1;
            }
        }
    }
        return result;
    }
bigger(arr);