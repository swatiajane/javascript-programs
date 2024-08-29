var outVariable = 100;

function outer(){

    let outerVariable = 200;

    let inner = function(){

        let innerVariable = 300;

        console.log(innerVariable);

        console.log(outerVariable);

        console.log(outVariable);

    };

    return inner;

}

let result = outer();

result();

// outer()()
