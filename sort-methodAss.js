const RollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
// 1. Reverse the array
console.log(`==================Q1=========================`)
const reversedArray = RollNumbers.reverse();
console.log("Reversed Array:", reversedArray);

// 2. Use the sort() method without any custom sorting logic
console.log(`==================Q2=========================`)
const sortedArrayWithoutCustomLogic = RollNumbers.sort();
console.log("Sorted Array without custom logic:", sortedArrayWithoutCustomLogic);

// 3. Sort the array in ascending order with custom logic
console.log(`==================Q3=========================`)
const sortedArrayAscending = RollNumbers.sort((a, b) => a - b);
console.log("Sorted Array in ascending order:", sortedArrayAscending);

// 4. Find the Greatest number from the array
console.log(`==================Q4=========================`)
const greatestNumber = Math.max(...RollNumbers);
console.log("Greatest Number:", greatestNumber);

// 5. Find the smallest number from the array
console.log(`==================Q5=========================`)
const smallestNumber = Math.min(...RollNumbers);
console.log("Smallest Number:", smallestNumber);

// 6. Remove duplicates from array
console.log(`==================Q6=========================`)
const uniqueArray = RollNumbers.filter((value, index, self) => self.indexOf(value) === index);
console.log("Array with duplicates removed:", uniqueArray);