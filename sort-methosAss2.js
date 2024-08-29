// Define the Employee class
class Employee {
    constructor(Id, Name, Department, Salary, Company) {
        this.Id = Id;
        this.Name = Name;
        this.Department = Department;
        this.Salary = Salary;
        this.Company = Company;
    }
}

// Create Employee objects

let employee1 = new Employee(101, "Venu", "HR", 50000, "TCS Company");
let employee2 = new Employee(102, "Ruhi", "IT", 60000, "Wipro Company");
let employee3 = new Employee(103, "Saru", "Finance", 55000, "Infosys Company");

// Add Employee objects to arrayEmployees
let arrayEmployees = [employee1, employee2, employee3];

// Task 1: Sort arrayEmployees in descending order of Employee Id's and log employee details (Id, Name, Department)
console.log(`========================Q1========================`);
arrayEmployees.sort((a, b) => b.Id - a.Id).forEach(employee => console.log(employee.Id, employee.Name, employee.Department));

// Task 2: Sort arrayEmployees in ascending order of employee department and log Id, department, and Company
console.log(`========================Q2========================`);
arrayEmployees.sort((a, b) => a.Department.localeCompare(b.Department)).forEach(employee => console.log(employee.Id, employee.Department, employee.Company));

// Task 3: Sort arrayEmployees in descending order of employee salary and log Name, Salary, and Company
console.log(`========================Q13========================`);
arrayEmployees.sort((a, b) => b.Salary - a.Salary).forEach(employee => console.log(employee.Name, employee.Salary, employee.Company));