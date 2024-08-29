console.log(city);

var city;

greet();
function greet(){
    console.log(`Good Evening`); 
}

// show(); // Not allowed because F.E never hoisted
var show = function(){
    console.log(`Inside Function expression...`); 
}
