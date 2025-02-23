type User = {
    type: 'user';
    name: string;
    age: number;
    department: string;
    email: string;
  };
  
  type Admin = {
    type: 'admin';
    name: string;
    role: string;
    permissions: string[];
  };
  
  type Person = User | Admin;
  
  type FilterCriteria<T> = Omit<Partial<T>, 'type'>;
  
  function filterPersons(persons: Person[], personType: 'user', criteria: FilterCriteria<User>): User[];
  function filterPersons(persons: Person[], personType: 'admin', criteria: FilterCriteria<Admin>): Admin[];
  function filterPersons(persons: Person[], personType: 'user' | 'admin', criteria: FilterCriteria<User> | FilterCriteria<Admin>): User[] | Admin[] {
    return persons.filter(person => {
      if (person.type !== personType) return false;
      return Object.keys(criteria).every(key => {
        return (person as any)[key] === (criteria as any)[key];
      });
    }) as any;
  }
  
  const people: Person[] = [
    { type: 'user', name: 'Layo', age: 22, department: 'LearnableFE', email: 'layo55@gmail.com' },
    { type: 'admin', name: 'Emmanuel', role: 'Manager', permissions: ['Instructs', 'Inspect'] },
    { type: 'user', name: 'Mercy', age: 30, department: 'LearnableFE', email: 'mercy101@gmail.com' }
  ];
  
  const usersFiltered = filterPersons(people, 'user', { age: 22 });
  const adminsFiltered = filterPersons(people, 'admin', { role: 'Manager' });
  
  console.log(usersFiltered);
  console.log(adminsFiltered);
  