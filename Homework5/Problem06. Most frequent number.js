/**
 * Problem 6. Most frequent number

 Write a script that finds the most frequent number in an array.
 Example:

 input	result
 4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3	4 (5 times)
 * */
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    counter,
    maxLength = 0,
    sequence = [],
    currNum,
    index,
    arrLen = arr.length,
    j,
    i;
for(index = 0; index < arrLen - 1; index += 1){
    counter = 1;
    for(j = index + 1; j < arrLen; j += 1){
        if(arr[j] === arr[index]){
            counter += 1;
        }
    }
    if(counter > maxLength){
        maxLength = counter;
        currNum = arr[index];
    }
}

console.log(currNum + ': ' + maxLength + ' times');