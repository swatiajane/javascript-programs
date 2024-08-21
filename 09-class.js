class Student{

    //Constructor: Special method used to initialize an object

    constructor(fullName, graduation, collegeName, city){

        this.fullName = fullName;

        this.graduation = graduation;

        this.collegeName = collegeName;

        this.city = city;

    }

    //Member Function

}

 

const std1 = new Student("Sid Gates", 2024, "Clg-one", "Pune");

console.log(std1);

const std2 = new Student("Jenny Many", 2023, "Clg-two", "Mumbai");

console.log(std2);