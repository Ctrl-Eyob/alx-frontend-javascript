// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Define the Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example director object
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the printTeacher function (accepts an object)
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implement printTeacher using object destructuring and exact return format
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); // -> "John. Doe"
