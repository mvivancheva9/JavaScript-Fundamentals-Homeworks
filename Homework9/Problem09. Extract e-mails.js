/**
 * Problem 9. Extract e-mails

 Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.
 */
var text = 'fnrjnfrsjfnvrsufniewo agg@abv.bg hfurihgriughrughriulgvriugfvnrul tt@abv.bg';
var result = [];
result += text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
console.log(result);