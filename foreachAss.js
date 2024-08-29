const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((element, index) => {
  console.log(`Index ${index}: ${element}`);
});

arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});

const negativeNumbers = [];

arrayNumbers.forEach((element) => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});

console.log(negativeNumbers);