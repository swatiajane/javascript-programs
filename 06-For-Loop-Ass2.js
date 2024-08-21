const inputString = "I am very good IT Developer";
const vowels = "aeiouAEIOU";
let vowelCount = 0;
const lowercaseInput = inputString.toLowerCase();
for (let i = 0; i < lowercaseInput.length; i++) {
    if (vowels.includes(lowercaseInput[i])) {
        vowelCount++;
    }
}
console.log("Total number of vowels including small and capital vowels:", vowelCount);

console.log(`==================================================================`);

function sumOfCubes() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
}
const result = sumOfCubes();

console.log("The sum of the cubes of numbers from 1 to 5 is:", result);

console.log(`==================================================================`);

function oddPositionedChars(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ' && (i + 1) % 2 !== 0) {
            console.log(inputString[i]);
        }
    }
}
const string1 = "Hard work always pays back";
const string2 = "Soon I will be UI IT Champ";

console.log("Odd-positioned characters in string1:");
oddPositionedChars(string1);

console.log("\nOdd-positioned characters in string2:");
oddPositionedChars(string2);
