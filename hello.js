function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        if (person.type !== personType)
            return false;
        return Object.keys(criteria).every(function (key) {
            return person[key] === criteria[key];
        });
    });
}
var people = [
    { type: 'user', name: 'Layo', age: 22, department: 'LearnableFE', email: 'layo55@gmail.com' },
    { type: 'admin', name: 'Emmanuel', role: 'Manager', permissions: ['Instructs', 'Inspect'] },
    { type: 'user', name: 'Mercy', age: 30, department: 'LearnableFE', email: 'mercy101@gmail.com' }
];
var usersFiltered = filterPersons(people, 'user', { age: 22 });
var adminsFiltered = filterPersons(people, 'admin', { role: 'Manager' });
console.log(usersFiltered);
console.log(adminsFiltered);
