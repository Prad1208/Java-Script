console.log("Hi")
// global scope and location


// takes nothing nature ka function, returns nothing
// takes something nature ka function, returns something
          

function f1(){
    console.log("hello");
    return; 
}
f1();
console.log("hii");



console.log("1");
setTimeout(function(){console.log("A");},3000);
console.log("2");
setTimeout(function(){console.log("B");},1000);
console.log("3");
f1()
console.log("4");
setTimeout(function(){console.log("C");},2000);
console.log("5");
f1();
console.log("6");
function f1(){
    console.log("HEllo");
}
