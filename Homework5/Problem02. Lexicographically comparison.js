/**
 * Problem 2. Lexicographically comparison

 Write a script that compares two char arrays lexicographically (letter by letter).
 */
var arr1= [],
    arr2 = [],
    index,
    arr1Len = arr1.length,
    arr2Len = arr2.length,
    result = '';
if (arr1Len > arr2Len){
    result = arr2 + ' is first';
}
else if(arr1Len < arr2Len){
    result = arr1 + ' is first';
}
else{
    for (index = 0; index < arr1Len; index += 1){
        if(arr1[index] < arr2[index]){
            result = arr1 + ' is before ' + arr2;
        }
        else if(arr1[index] > arr2[index]){
            result = arr2 + ' is before ' + arr1;
        }
        else{
            continue;
        }

    }
}
if(result == ''){
    result = 'The two arrays are equal';
}
console.log(result);
