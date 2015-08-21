/**
 * Problem 1. English digit

 Write a function that returns the last digit of given integer as an English word.
 Examples:

 input	output
 512	two
 1024	four
 12309	nine
 */
var number = 456,
    last,
    digitAsWord;
lastDigit(number);
function lastDigit(number){
    last = number % 10;
    switch(last){
        case 0: digitAsWord = 'zero'; break;
        case 1: digitAsWord = 'one'; break;
        case 2: digitAsWord = 'two'; break;
        case 3: digitAsWord = 'three'; break;
        case 4: digitAsWord = 'four'; break;
        case 5: digitAsWord = 'five'; break;
        case 6: digitAsWord = 'six'; break;
        case 7: digitAsWord = 'seven'; break;
        case 8: digitAsWord = 'eight'; break;
        case 9: digitAsWord = 'nine'; break;
    }
    return digitAsWord;
}