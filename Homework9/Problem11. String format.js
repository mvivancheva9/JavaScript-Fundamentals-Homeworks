/**
 * Problem 11. String format

 Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types
 */
function stringFormat(str) {
    for (var i = 0; i < 30; i++) {
        var regex = new RegExp("[{]" + i + "[}]", "gi");
        str = str.replace(regex, arguments[i + 1]);
    }
    return console.log(str);
}
var format = "{0}, {1}, {0} text {2}";
var str = stringFormat(format, 1, "Pesho", "Gosho");