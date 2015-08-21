/**
 * Problem 4. Lexicographically smallest

 Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.
 */
function problem4() {

            var min = 'zzz';
            var max = '';
            for (var prop in document) {
                if (prop < min) {
                    min = prop;
                }
                if (prop > max) {
                    max = prop;
                }
        }
        document.getElementById('result4').innerHTML += 'The min and max of ' + 'document' + ' are: ' + min + ' ' + max + "<br>";
    var min = 'zzz';
    var max = '';
    for (var prop in window) {
        if (prop < min) {
            min = prop;
        }
        if (prop > max) {
            max = prop;
        }
    }
    document.getElementById('result4').innerHTML += 'The min and max of ' + 'window' + ' are: ' + min + ' ' + max + "<br>";
    var min = 'zzz';
    var max = '';
    for (var prop in navigator) {
        if (prop < min) {
            min = prop;
        }
        if (prop > max) {
            max = prop;
        }
    }
    document.getElementById('result4').innerHTML += 'The min and max of ' + 'navigator' + ' are: ' + min + ' ' + max + "<br>";

}