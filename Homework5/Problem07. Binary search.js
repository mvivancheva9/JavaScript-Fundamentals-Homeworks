/**
 * Problem 7. Binary search

 Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
 * */
var arr= [5, 6, 8, 9, 23, 25, 29, 31, 36, 37, 45],
    middle,
    number = 23,
    min,
    max;
binarySearch(arr, number, 0, arr.length - 1);
    function binarySearch(arr, number, min, max) {
        middle = min + Math.floor((max - min) / 2);
        if (arr[middle] > number) {
            return binarySearch(arr, number, min, middle - 1);
        } else if (arr[middle] < number) {
            return binarySearch(arr, number, middle + 1, max);
        } else {
            return middle;
        }
    }