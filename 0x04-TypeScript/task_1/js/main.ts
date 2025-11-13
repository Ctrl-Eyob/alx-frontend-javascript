
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the structure of the class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// The actual class implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example test (not required for submission)
// const student = new StudentClass('Eyob', 'Getachew');
// console.log(student.displayName());  // Eyob
// console.log(student.workOnHomework());  // Currently working
