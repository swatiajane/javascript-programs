const array = [ 10, 20, [ 4, 6, 9, 8 ] ];

const newArray = array.flat();

console.log(newArray);

const arrayNested = [ 10, 20, [ 4, 6, [77, 88] , 8 ] ];

const flattenArray = arrayNested.flat(2);

console.log(flattenArray);

// Handling empty slots

console.log(`===== Handling empty slots ========`);

 const arrayOne = [10, , 20, 40, 50, , , 90];

 console.log(arrayOne);

 const arrayTwo = arrayOne.flat();

 console.log(arrayTwo);