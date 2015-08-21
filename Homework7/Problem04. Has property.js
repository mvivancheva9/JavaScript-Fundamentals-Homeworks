/**
 * Problem 4. Has property

 Write a function that checks if a given object contains a given property.

 var obj  = …;
 var hasProp = hasProperty(obj, 'length');
 */
function checkHasProperty (obj,string) {
    hasProp = false;
    for (var prop in obj) {
        if (prop === string) {
            hasProp = true;
        }
    }
    return hasProp;
}
var student04 = {
    firstName: 'Dragan',
    lastName: 'Draganov',
    height: 179
};
hasProperty();
function hasProperty () {
    console.log("Object contains a Middle Name:");
    console.log(checkHasProperty(student04,'middlename'));
    console.log("Build-in function object contains last name and height:");
    console.log(student04.hasOwnProperty('lastName'));
    console.log(student04.hasOwnProperty('height'));
    console.log(student04);
}