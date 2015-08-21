/**
 * Problem 3. Deep copy

 Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.
 */
function deepCopy(obj) {
    var copied = {};
    for (var prop in obj) {
        if (typeof obj[prop] === "object") {
            copied[prop] = obj[prop];
            deepCopy(obj[prop]);
        } else {
            copied[prop] = obj[prop];
        }
    }
    return copied;
}

var student = {
    firstName: 'Drqagan',
    lastName: 'Draganov',
    hair: {
        color: 'brown',
        type: 'curly'
    }
};

var student2 = deepCopy(student);
deepCopyFunction();
function deepCopyFunction() {
    console.log(student);
    console.log(student.hair);
    console.log(student2);
    console.log(student2.hair);
}