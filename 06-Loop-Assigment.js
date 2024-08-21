var word = "Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char=='e') {
        count++; 
    }
}
console.log(`Count of char e is : ${count}`);

console.log(`======= Sum of 1 to 5================`);
var sum = 0;
for (let index = 1; index <=5; index++) {
    sum = sum + index;   
}
console.log(`Summation is ${sum}`);