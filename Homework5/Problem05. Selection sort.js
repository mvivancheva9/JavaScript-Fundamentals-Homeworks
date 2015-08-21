/**
 * Problem 5. Selection sort

 Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
 Hint: Use a second array
 */
var arr1 = [3,58,5,0,1,67,8],
    arr2 = [],
    min = arr1[arr1.length - 1],
    currMin = arr1[0],
    index,
    arr2Index,
    arr2Len,
    arr1Len = arr1.length,
    max = arr1[0],
    temp;
arr2Len = arr1Len;
for(arr2Index = 0; arr2Index < arr2Len; arr2Index += 1){
    if(arr2Index === 0) {
        for (index = 0; index < arr1Len; index += 1) {
            if (arr1[index] < currMin) {
                currMin = arr1[index];
            }
            if (arr1[index] > max) {
                max = arr1[index];
            }
        }
        arr2[arr2Index] = currMin;
        min = currMin;
    }
    else {
        for (index = 0; index < arr1Len; index += 1) {
            if(arr1[index] > min){
                if (arr1[index] < temp) {
                    temp = arr1[index];
                }
            }
        }
        currMin = temp;
        arr2[arr2Index] = currMin;
        min = currMin;
        temp = max;
    }
}
console.log(arr2);