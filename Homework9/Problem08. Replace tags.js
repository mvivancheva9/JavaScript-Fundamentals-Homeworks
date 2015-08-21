/**
 * Problem 8. Replace tags

 Write a JavaScript function that replaces in a HTML document given as string all the
 tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
 */
var input = '<a>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</a>';
input = input.replace(/<a href/g, '[URL');
input = input.replace(/>/g, ']');
input = input.replace(/<\/a/g, '[/URL');
console.log(input);