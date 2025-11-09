// Define the Teacher interface
interface Teacher {
  readonly firstName: string;         // only modifiable at initialization
  readonly lastName: string;          // only modifiable at initialization
  fullTimeEmployee: boolean;          // always defined
  yearsOfExperience?: number;         // optional
  location: string;                   // always defined
  [key: string]: any;                 // allow any extra properties
}

// Create example teachers
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'New York',
  contract: true, // extra property
};

// Test example
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
