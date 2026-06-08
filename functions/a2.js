// Function declaration (named function)
f1();
function f1(){
    console.log("fi");
}

// Function expression
const f2=function(){
    console.log("I am f2")
}
f2(); // can't be hoisted

// Arrow function
const f3=(username) => console.log("I am f3",username);
f3("Mine");
// isme curly bracket lagana hai toh return keyword likhna padega

const f4=(user)=> {return "hello " +user}
s=f4("mine");
console.log(s);


// Importedddd
function sayHi(fun){
    return fun('Praduman');
}

s1=sayHi((user)=> {return "Hi, "+user})
console.log(s1)


//Default Parameters
function f5(user='Praduman')
{
    console.log("HI " +user);
}
f5();


//Anonymous function
function fun(f){
     f();
}
fun 
( function()
{
    console.log("I am f6");
});


// IIFE: Immediately invoked function expression     
(function (){
    console.log("I am f7");
})();        


// arguments object
function f8(){
    // console.log(arguments) 
    //[Arguments] { '0': 10, '1': 20 }
    console.log(arguments['0'],arguments['1'])
}
f8(10,20);

function f9(){
    // for(let k in arguments) gives index of arguments
    for (let k of arguments)
    {
        console.log(k);
    }
}
// f8(10,20,30,40)   o/p=10 20
f9(10,20,30,40)

// Constructor function
function Person(name,age){
    // console.log(this)
    this.name=name;
    this.age=age;
    console.log(this)
}

// Person("amit",19) do this with upper console.log(this) and then see on console and terminal (vs code)
// let p1=new Person('Amit',18);         o/p=Person{}

let p1=new Person('Amit',18);   
// console.log(p1) // same output as above console


//Generator function no hoisting we can generate 10 prime no.s or we can implement loop through this

function* counter(){
    yield 1;
    yield 2;
    yield 3;
}
const g=counter();
console.log(g);
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
