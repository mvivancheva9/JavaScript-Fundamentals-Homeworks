/**
 * Problem 2. People of age

 Write a function that checks if an array of person contains only people of age (with age 18 or greater)
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
    new Person('Dragan', 'Draganov', 20, 'male'),
    new Person('Draganka','Draganova', 21, 'female'),
    new Person('Perkan', 'Petkanov', 22, 'male'),
    new Person('Petkanka', 'Petkanova', 23, 'female'),
    new Person('Ivan', 'Ivanov', 24, 'male'),
    new Person('Ivanka', 'Ivanova', 25, 'female'),
    new Person('Nikolai', 'Nikolaev', 26, 'male'),
    new Person('Nikolaia', 'Nikolaeva', 27, 'female'),
    new Person('Georgi', 'Georgiev', 28, 'male'),
    new Person('Gergana', 'Georgieva', 29, 'female')
];
var result = 'The array contains only people of age (with age 18 or greater) ---> ';
result += people.every(function (item){
    return item.age >= 18;
});