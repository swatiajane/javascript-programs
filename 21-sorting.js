console.log(`==== Reverse the array=======`);

const array = ["Jenny", "Elon", "Stew", "Bill"];

console.log(array);

const reverseArray = array.reverse();

console.log(reverseArray);

console.log(`====== Sorting array of names in ascending order ======`);

const arrayOne = ["Jenny", "Elon", "Stew", "Bill"];

console.log(arrayOne);

const arrayTwo = arrayOne.sort();

console.log(arrayTwo);

console.log(`====== Sorting array of names in descending order ======`);

const arrayThree = arrayTwo.reverse();

console.log(arrayThree);

console.log(`==== Array of numbers ===`);

const arrayFour = [10, 2, 900, 30, 4, 7];

console.log(arrayFour);

console.log(`==== Sorting array of numbers in ascending order ====== `);

const arrayFive = arrayFour.sort();

console.log(arrayFive);

 

console.log(`Writing our custom logic for sort() method `);

const arraySix = arrayFour.sort( (n1, n2)=>{

    return n1>n2 ? 1 : -1; 

});

console.log(arraySix);

 

console.log(`===================`);

const arraySeven = [10, 2, 900, 30, 4, 7];

console.log(arraySeven);

console.log(`Sorting array of numbers in descending order`);

console.log(`1. Way First: Sort the array using custom logic and reverse it`);

 

console.log(`2. Way Second: Modify sort() method custom logic`);

const arrayEight = arraySeven.sort( (n1, n2)=>{

    return n1>n2 ? -1 : 1; 

});

console.log(arrayEight);

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

const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`=== List the employees by their Name in ascending order ===`);

const arrayEmpSort = arrayEmployee.sort((e1, e2)=>{

    return e1.emp_salary>e2.emp_salary ? 1 : -1;

});

for (const element of arrayEmpSort) {

    console.log(element.emp_salary); 

}


const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 113, 799, 56, 45 ];

const uniqueArray = [];

 

for (let index = 0; index < arrayRollNumbers.length; index++) {

    let element = arrayRollNumbers[index];

    if(uniqueArray.indexOf(element) == -1 ){

        uniqueArray.push(element);

    }

}

console.log(uniqueArray);