// var a=10;
let a=10
console.log(this);
// for let and var on console it gives windows and 10 respectively
console.log(this.a);


function f1(){
    "use strict"
    // b=6; error b is not defined
    let b=6;
    console.log(this);
}
f1()

const obj={
name:"Praduman", age:20,
sayHi:function(){
     console.log("I am "+this.name);
     console.log("I am "+this)
     console.log("I am "+name)
    console.log(this);
}
};
// sayHi();   ReferenceError: sayHi is not defined
obj.sayHi();