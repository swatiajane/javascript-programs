let arrayList = ["Jenny", "Elon", "Stew", "Bill", "Warn"];
console.log(arrayList[2]);

console.log(`==============Traversing an array ======================`);

for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);  
}

console.log(`===== Select the elements =========`);
let numArray = [10, 20, 30, 20, 80, 40];
let arraySlice =numArray.slice(3);
console.log(arraySlice);
const sliceElements = numArray.slice(1, 5);
console.log(sliceElements);

console.log(`=========== splice() - To delete the elements ===========`);
let list = [10, 20, 30, 20, 80, 40];
console.log(list);
let splice3 = list.splice(3);
console.log(list);
console.log(splice3);

let listOne = [10, 20, 30, 20, 80, 40, 90, 100];
console.log(listOne);
const splice32 = listOne.splice(3, 2);
console.log(listOne);
console.log(splice32);

console.log(`=========== splice() - To Insert the elements without replacing any element ===========`);
let listTwo = [10, 20, 30, 80, 40];
console.log(listTwo);
const newArray = listTwo.splice(2, 0, 444);
console.log(newArray);
console.log(listTwo);

console.log("=========================");

let listThree = [90, 66, 88, 30];
console.log(listThree);
const deletedElement = listThree.splice(1, 0, 11, 22, 33, 44)
console.log(deletedElement);
console.log(listThree);

console.log(`=========== splice() - Insert an element by replacing or deleting array elements ===========`);
let listFour = [10, 20, 30, 80, 40];
console.log(listFour);
const deleteCount = listFour.splice(2, 1)
console.log(deleteCount);
console.log(listFour);
console.log(`===============`);
let listFive = [10, 20, 30, 80, 40];
console.log(listFive);
const countDelete = listFive.splice(2, 2, 88, 99, 66, 33, 11);
console.log(countDelete);
console.log(listFive);