/**
 * Problem 10. Find palindromes

 Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 */
var text = 'ngjirng nguirngir fgnnroifn ngurihgne. ghg thht pjjp';
var textSplit = [],
    textSplit = text.split(/[ .,!?]/),
    i,
    output ='';
for(i = 0; i < textSplit.length; i += 1){
    if(checkPalindrom(textSplit[i])){
        output += textSplit[i];
        output += ' ';
    }
}
console.log(output);
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}