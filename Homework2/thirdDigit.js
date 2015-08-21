/**
 * Problem 4. Third digit

 Write an expression that checks for given integer if its third digit (right-to-left) is 7.
 */
function result4() {
    var result;
    var num = document.getElementById('thirdDigit').value;
    var arr = num.split('');
    if(arr[arr.length - 3] == 7){
        result = 'true';
    }
    else{
        result = 'false';
    }
    document.getElementById('answer4').innerHTML = result;
}