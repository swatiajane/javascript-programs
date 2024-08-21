


let person = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 24,
    isMarried: true,
    skills: ["HTML", "CSS", "JS"], // "Git & GitHub"
    marks: {
        math: 80,
        physics: 90,
        english: 56,
        chemistry: 78
    }
}

console.log(person);
const firstName = person.firstName;
console.log(`First Name: ${firstName}`);

console.log(`Age is: ${person.age}`);

person.skills.push("Git & GitHub");
const personSkills = person.skills;
console.log(`======= Person Skills =======`);
for (const element of personSkills) {
    console.log(element);   
}


console.log(`==== Marks =========`);
console.log(`English marks: ${person.marks.english}`);


console.log(`======== Update ======= `);
person.age = 55;
console.log(`Updated age: ${person.age}`);
console.log(person);


console.log(`======== Add new property  ======= `);
person.country = "India";

console.log(`======== Traversing ============`);
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key}, ${element}`);
    }
}

console.log(`======== Delete the property ======= `);
delete person.isMarried;

console.log(`======== Empty object ======= `);
let student = {

}

console.log(`======== Method in the object ======= `);
let employee = {
    fullName: "Elon Musk",
    age: 55,
    city: "LA",
    country: "USA",
    details:function(){
       console.log(`Full Name: ${this.fullName}, City: ${this.city}, Country: ${this.country}`);   
    }
}

employee.details();


console.log(`====== Object keys and Values =========`);

let emp = {
    fullName: "Elon Musk",
    age: 55,
    city: "LA",
    country: "USA"
}
const empKeys = Object.keys(emp);
console.log(empKeys);

const empValues = Object.values(emp);
console.log(empValues);

const entries = Object.entries(emp);
console.log(entries);

console.log(entries[0][0]);
console.log(entries[0][1]);
console.log(entries[1][0]);
console.log(entries[1][1]);



class Student{
    //Constructor: Special method used to initialize an object
    constructor(fullName, graduation, collegeName, city){
        this.fullName = fullName;
        this.graduation = graduation;
        this.collegeName = collegeName;
        this.city = city;
    }
    //Member Function
    display(){
        console.log(`Student Details -> Full Name ${this.fullName}, Graduation: ${this.graduation}, College Name: ${this.collegeName}, City: ${this.city}`);
    }
}

function Student(fullName, graduation, collegeName, city){
    this.fullName = fullName;
    this.graduation = graduation;
    this.collegeName = collegeName;
    this.city = city;
}
const std1 = new Student("Sid Gates", 2024, "Clg-one", "Pune");
console.log(std1);

const std2 = new Student("Jenny Many", 2023, "Clg-two", "Mumbai");
console.log(std2);

Student.prototype.country = "India";

console.log(std1.fullName, std1.country);

console.log(std2.fullName, std2.country);


// Prototype
const array = [10, 20, 30, 100];
array.push(500);
array.pop();


let friendList = [ "Elon", "Bill", "Stew", "Jenny"];

friendList.splice(2, 1);