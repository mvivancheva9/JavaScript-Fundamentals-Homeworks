/**
 * Problem 6. Extract text from HTML

 Write a function that extracts the content of a html page given as text.
 The function should return anything that is in a tag, without the tags.
 */
var text = '<html><head><title>Sample site</title></head> <body> ' +
    '<div>text <div>more text</div>and more... </div>in body </body>',
    result = '',
    isInTag = false;
    for (var i = 0; i < text.length; i += 1) {
        if (text[i] === '<') {
            isInTag = true;
        }
        else if (text[i] === '>') {
            isInTag = false;
        }
        else {
            if (!isInTag) {
                result += text[i];
            }
        }
    }
console.log(result);
