// task_2/js/main.ts

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
console.log(calculateBonus(800)); // You are eligible for a bonus
