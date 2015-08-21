/**
 * Problem 3. Occurrences of word

 Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading.
 */
var text = 'How many times you meet this word.Word is important word.',
    counter = 0,
    index,
    word = 'word',
    delimiters = [' ', '.', ',', '!', '?', '\"'],
    arr = [];
    arr = text.split(/[ .,!?]/);
console.log(word + ' is found ' + occurrence(word) + ' times');
function occurrence(word){
    var arrLen = arr.length;
    for(index = 0; index < arrLen; index += 1){
        if(arr[index].toLowerCase() === word){
            counter += 1;
        }
    }
    return counter;
}
