console.log(`Traversing using forEach() `);
const array = [10, 21, 30, 43, 50 ];
array.forEach( (element)=>{
    console.log(element);
});

console.log(` ==== Even Numbers ===== `);
array.forEach( (element)=>{
    if(element%2==0) {
        console.log(element);
    }  
});

console.log(` ==== Transform array to it's square ===== `);
const arrayNum = [10, 21, 30, 43, 50 ];
console.log(arrayNum);
const arraySquare = arrayNum.map((element)=>{
    return element * element;
});
console.log(arraySquare);


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

arrayEmployee.forEach( (employee) => {
    console.log(employee.emp_name);
})

console.log(`====== Transforming array of objects to array of employee names ===========`);
const employeeNames = arrayEmployee.map( (employee) => {
    return employee.emp_name;
})
console.log(employeeNames);

console.log(`====== Transforming array of objects to array of employee salary ===========`);
const employeeSalaries = arrayEmployee.map( (employee) => {
    return employee.emp_salary;
})
console.log(employeeSalaries);