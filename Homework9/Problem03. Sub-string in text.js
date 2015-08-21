/**
 * Problem 3. Sub-string in text

 Write a JavaScript function that finds how many times a substring is contained in a given text
 (perform case insensitive search).
 Example:

 The target sub-string is in

 The text is as follows: We are living in an yellow submarine. We don't have anything else.
 inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.

 The result is: 9
 */
var str = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
    counter = 0,
    lowerStr = str.toLowerCase(),
    search = 'in',
    i;
    for(i = 0; i < lowerStr.length; i += 1){
    if (lowerStr.substr(i, 2) == search) {
        counter += 1;
    }
    ;
}
console.log(counter);