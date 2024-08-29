// Arrow function with no arguments and no return value

let show = ()=>{

    console.log('Inside show function');  

}

show();

 

// Arrow function with arguments and no return value

let add = (n1, n2)=>{

    console.log(`Addition is: ${n1+n2}`);  

}

add(10, 20);

 

// Arrow function with arguments and return value

let multiply = (n1, n2)=>{

    let result = n1*n2;

    return result;

}

let mul = multiply(20, 5);

console.log(`Multiplication is: ${mul}`);
