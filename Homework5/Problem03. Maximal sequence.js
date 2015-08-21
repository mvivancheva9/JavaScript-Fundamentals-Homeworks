/**
 * Problem 3. Maximal sequence

 Write a script that finds the maximal sequence of equal elements in an array.
 */
var arr = [2, 1, 1, 2, 3, 3, 2, 2, 1, 1, 1, 1],
    index,
    counter = 1,
    arrLen = arr.length,
    maxArray,
    currCounter = 1,
    endIndex,
    seqIndex;
for(index = 1; index < arrLen; index += 1){
    maxArray = '';
    if(arr[index] === arr[index - 1]){
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