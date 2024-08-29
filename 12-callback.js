function jennyHomeWork(callback) {
  console.log(`==== Jenny Started Homework=====`);

  console.log(`She is completing her homework`);

  console.log(`She have completed her homework step by step`);

  callback();
}

let elonCopyHomeWork = function () {
  console.log(`====== Elon came back ======= `);

  console.log(`Started copying homework`);

  console.log(`Finally he also completed his assignment`);
};

jennyHomeWork(elonCopyHomeWork);

console.log(`=========  inbuilt callback function ===============`);

// In built callback function

//1 sec = 1000 Mill sec

let greet = function () {
  console.log(`Hello - Good Morning`);
};

setTimeout(greet, 8000);

// setTimeout(function(){

//     console.log(`Hello - Good Morning`);

// }, 8000);

setTimeout(function () {
  console.log(`Hello - Good Morning`);

  setTimeout(function () {
    console.log(`Inside nested callback - 1`);

    setTimeout(function () {
      console.log(`Inside nested callback - 2`);

      setTimeout(function () {
        console.log(`Inside nested callback - 3`);
      }, 7000);
    }, 9000);
  }, 5000);
}, 8000);


function isPrime(num){

    for (let index = 2; index < num; index++) {

        if(num%index==0){

            return false;

        } 

    }

   return true; 

}

var result = isPrime(4);

console.log(`Is number 4 Prime - ${result}`);

 

var result = isPrime(5);

console.log(`Is number 5 Prime - ${result}`);