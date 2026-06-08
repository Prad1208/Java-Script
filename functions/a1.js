let e=document.querySelector("h1");
console.log(e);
console.log(e.tagName);

let p=document.querySelector("p");
console.log(p);
console.log(p.tagName);

p.textContent="Hello PD";
console.log(p)

let a=document.getElementById("he1");
// console.log(a);
let b=document.getElementsByTagName("h1");
let c=document.getElementsByClassName("c1");
// a.innerText="Welcome"
// b[1].innerHTML="My Sir G"
// c[1].textContent="This is a dynamically generated"
// console.log(a)
// console.log(b)
// console.log(b[0])
// console.log(b[1])
// console.log(c)
console.log(a.innerHTML);
console.log(a.innerText);
console.log(a.textContent);




