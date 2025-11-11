// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra attributes
}

// Define the Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Create a Director object
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ------------------------------------------------------
// Interface for the printTeacher function
// ------------------------------------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function using destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); 
// Output: J. Doe
