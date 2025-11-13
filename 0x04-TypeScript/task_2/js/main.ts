// task_2/js/main.ts

// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create employee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) return employee.workDirectorTasks();
  else return employee.workTeacherTasks();
}

// Test
// console.log(executeWork(createEmployee(200)));  // Getting to work
// console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// String literal type
interface Employee {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allows adding new attributes
}

export function printEmployeeDetails(employee: Employee): void {
  console.log(
    `${employee.firstName} ${employee.lastName} works in ${employee.location}`
  );
}

export function calculateBonus(salary: number): string {
  if (salary < 500) {
    return 'Salary is too low for a bonus';
  } else {
    return 'You are eligible for a bonus';
  }
}

const emp1: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: false,
};

printEmployeeDetails(emp1);

console.log(calculateBonus(400)); // Salary is too low for a bonus
console.log(calculateBonus(800)); // You are eligible for a bonus}

// Test
// console.log(teachClass('Math'));
// console.log(teachClass('History'));
