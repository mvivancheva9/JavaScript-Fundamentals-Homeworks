/**
 * Problem 5. Appearance count

 Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.
 */
var counter = 0,
    index,
    arrLen = arr.length;
function count(number, arr){
    counter = 0;
    for(index = 0; index < arrLen; index += 1) {
        if (arr[index] == number) {
            counter += 1;
        }
    }
    return counter;
}
function test() {
    var arr = [1, 2, 3, 4, 3, 7, 8, 9, 3];
    var test1 = count(1, arr),
        test2 = count(3, arr),
        test1ExpectedResult = 1,
        test2ExpectedResult = 3;

    console.log('Result test 1: ' + test1 + '. Expected Result: ' + test1ExpectedResult);
    console.log('Result test 2: ' + test2 + '. Expected Result: ' + test2ExpectedResult);
}
test();