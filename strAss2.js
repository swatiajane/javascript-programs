console.log("----------------------1---------------------");

var stringHandson = "Hey you are doing good,keep it up";
console.log("Given string is: ", stringHandson);

console.log("----------------------2---------------------");

var stringHandsonLength = stringHandson.length;
console.log("Total number of characters is: ", stringHandsonLength);

console.log("----------------------3---------------------");

var day = " Hey you are doing good,keep it up ";
var dayLength = day.length;
console.log("Before string trim length is: ", dayLength);

var dayAfterTrim = day.trim();
var dayAfterTrimLength= dayAfterTrim.length;
console.log("After string trim length is: ", dayAfterTrimLength);
console.log(dayAfterTrim);

console.log("----------------------4---------------------");

const inputString = "Hey you are doing good,keep it up ";
const originalLength = inputString.length;
const trimmedString = inputString.trim();
const stringLength = trimmedString.length;
const extraSpacesCount = originalLength - stringLength;

console.log("Original String: " + inputString);
console.log("Trimmed String: " + trimmedString);
console.log("Length of Trimmed String: " + stringLength);
console.log("Total Number of Extra Spaces Removed: " + extraSpacesCount);