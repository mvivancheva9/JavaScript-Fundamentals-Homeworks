/**
 * Problem 4. Number of elements

 Write a function to count the number of div elements on the web page
 */
var counter;
count();
function count(){
    counter = document.getElementsByTagName('div').length;
    return counter;
}