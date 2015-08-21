/**
 * Problem 6. Group people

 Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)
 */
function Person(fname, lname, age, gender){
    var result = '';
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
}
var people = [
    new Person('Dragan', 'Draganov', 15, 'male'),
    new Person('Draganka','Draganova', 21, 'female'),
    new Person('Perkan', 'Petkanov', 14, 'male'),
    new Person('Petkanka', 'Petkanova', 23, 'female'),
    new Person('Ivan', 'Ivanov', 24, 'male'),
    new Person('Ivanka', 'Ivanova', 25, 'female'),
    new Person('Nikolai', 'Nikolaev', 14, 'male'),
    new Person('Nikolaia', 'Nikolaeva', 27, 'female'),
    new Person('Georgi', 'Georgiev', 28, 'male'),
    new Person('Gergana', 'Georgieva', 29, 'female')
];
var result = people.reduce(function(obj, item) {
    if (obj[item.fname[0]]) {
        obj[item.fname[0]].push(item);
    } else {
        obj[item.fname[0]] = [item];
    }
    return obj;
}, {});

console.log(result);