/**
 * Problem 5. Youngest person

 Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.

 Example:

 var people = [
 { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
 { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];
 */
function checkYoungest(array) {
    var arrIndex = 0;
    var minAge = array[0].age;
    for (var i = 1; i < array.length; i++) {
        if (array[i].age < minAge) {
            minAge = array[i];
            arrIndex = i;
        }
    }
    return array[arrIndex].firstname + ' ' + array[arrIndex].lastname;
}

var people = [{
    firstname: 'Pesho',
    lastname: 'Peshov',
    age: 22
}, {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 23
}, {
    firstname: 'Dragan',
    lastname: 'Draganov',
    age: 24
}];

function youngestPerson() {
    console.log("The youngest person is: " + checkYoungest(people));
}
youngestPerson();