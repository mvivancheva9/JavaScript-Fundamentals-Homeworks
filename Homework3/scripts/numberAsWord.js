/**
 * Problem 8. Number as words

 Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
 */
function result8() {
    var number = document.getElementById('problem8A').value;
    number = parseInt(number);
    //creating a string of the words, necessary for the units and hundreds
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    //creating a string of the words, necessary for the tens and the number < 20
    var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    var words ='';
    if (number > 100) {
        words += units[Math.floor(number / 100)] + " hundred ";//assigning words to the hundred part
        number %= 100;
    }
    if (number > 0) {
        if (words != "")
            words += "and ";// assign and if there are unit parts, if not assign it before the tens part


        if (number < 20)// checks number < 20 and assign the proper word
            words += units[number];
        else {
            words += tens[Math.floor(number / 10)];// take the proper word from the tens string
            if ((number % 10) > 0)
                words += " " + units[number % 10];
        }
    }
    if(number === 0){
        words = 'zero';
    }

    document.getElementById('answer8').innerHTML = words;// print the result
}