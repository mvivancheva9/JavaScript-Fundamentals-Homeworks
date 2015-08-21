/**
 * Problem 4. Average age of females

 Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
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
var result = people.filter(function (item){
    return item.gender === 'female';
});
var average = result.reduce(function(av, item){
    return (av + item.age);
}, 0);
var outcome = 'The average age of all the females is: ' + average/(result.length);
console.log(outcome);