/**
 * Problem 2. Correct brackets

 Write a JavaScript function to check if in a given expression the brackets are put correctly.
 Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
 */
var correctExpression = '((a+b)/5-d)',
    incorrectExpression = ')(a+b))',
    open = '(',
    close = ')',
    openCounter,
    closeCounter,
    i;
function check(expression){
    var len = expression.length;
    openCounter = 0;
    closeCounter = 0;
    for(i = 0; i < len; i += 1){
        if(expression[i] == open){
            openCounter += 1;
        }
        else if(expression[i] == close){
            closeCounter += 1;
        }
    }
    if(openCounter == closeCounter){
        console.log('Correct!');
    }
    else{
        console.log('Incorrect');
    }
}
check(correctExpression);
check(incorrectExpression);