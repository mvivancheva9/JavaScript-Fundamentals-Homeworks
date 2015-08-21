/**
 * Problem 1. Make person

 Write a function for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders
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
people.forEach(function Person(fname,lname, age, gender){
    console.log(fname);
});