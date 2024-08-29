const array = [10, 21, 30, 43, 50 ];
const evenArray = array.filter((element)=>{
   return element%2==0;
});
console.log(evenArray);


console.log(`========= Traversing array of objects =========`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "It", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`===== Filter the TCS company employees======`);

const employeeTCS = arrayEmployee.filter((employee)=>{
    return employee.emp_company=="TCS";
})

employeeTCS.forEach( (employee)=>{
  console.log(employee);
});

const arrayTCSNames = employeeTCS.map((employee)=>{
    return employee.emp_name;
});
console.log(arrayTCSNames);

console.log(`Filter out all the IT department employees and list their names in array `);
// console.log(`Show the IT Department employee names`);
const arrayTCSEmployees = arrayEmployee.filter((employee)=>{
    return employee.emp_dept == "IT";
}).map((employee)=>{
    return employee.emp_name;
});
console.log(arrayTCSEmployees);