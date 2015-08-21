/*
 Problem 1. JavaScript literals

 Assign all the possible JavaScript literals to different variables.
 Problem 2. Quoted text

 Create a string variable with quoted text in it.
 For example: `'How you doin'?', Joey said'.
 Problem 3. Typeof variables

 Try typeof on all variables you created.
 Problem 4. Typeof null

 Create null, undefined variables and try typeof on them.
*/

var intNum = 2;
var floatNum = 2.2;
var stringSeq = "Gosho";
var boolVariable = true;
var arr = [1, 2, 3, 4];
var functionVar = function(){return;};
var obj = {course: 'JavaScript', level: 'Fundamentals'};
//Problem 4
var nullValue = null;
var undefinedValue = undefined;
//Problem 3
console.log('intNum is: '+ typeof (intNum));
console.log('floatNum is: '+ typeof (floatNum));
console.log('stringSeq is: '+ typeof (stringSeq));
console.log('boolVariable is: ' + typeof (boolVariable));
console.log('arr is: '+ typeof (arr));
console.log('functionVar is: '+ typeof (functionVar));
console.log('obj is: '+ typeof (obj));
//Problem 4
console.log('nullValue is: ' + typeof (nullValue));
console.log('undefinedValue is: ' + typeof (undefinedValue));
//Problem 2. Quoted text
var stringQuotes = "How you doin'?', Joey said";
console.log(stringQuotes);