/**
 * Problem 4. Maximal increasing sequence

 Write a script that finds the maximal increasing sequence in an array.
 Example:

 input	result
 3, 2, 3, 4, 2, 2, 4	2, 3, 4
 */
var arr = [3, 2, 3, 4, 2, 2, 4, 6, 7],
    index,
    counter = 1,
    arrLen = arr.length,
    maxArray,
    currCounter = 1,
    endIndex,
    seqIndex;
for(index = 1; index < arrLen; index += 1){
    maxArray = '';
    if(arr[index] > arr[index - 1]){
        currCounter += 1;
        if(currCounter > counter){
            counter = currCounter;
            endIndex = index;
        }
    }
    else{
        currCounter = 1;
    }
}
for(seqIndex = endIndex - counter + 1; seqIndex <= endIndex; seqIndex += 1){
    maxArray += arr[seqIndex];
}
console.log(maxArray);
