/**
 * Problem 3. Min/Max of sequence

 Write a script that finds the max and min number from a sequence of numbers.
 */
function problem3(){
    var sequence = document.getElementById('inputProblem3').value,
        min,
        max,
        index,
    arr = sequence.split(' ');
    min = +arr[0];
    max = +arr[0];
    for(index = 1; index < arr.length; index += 1){
        if(+arr[index] < min){
            min = arr[index];
        }
        if(+arr[index] > max){
            max = arr[index]
        }
    }
    document.getElementById('result3').innerHTML = 'The min is: ' + min + '. The max is: ' + max;
}