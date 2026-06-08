// function f1(){
//     document.body.style.backgroundColor="#333";  
// }
// f1(); // agar mai f1 ko call naa karu toh bg color black nahi hoga

// function f2(){
//     document.body.style.backgroundColor="#999";
// }
// f2()

let b=document.getElementsByTagName("button");
// b[0].addEventListener('click',f3);
// function f3(){
//     document.body.style.backgroundColor="#333";
// }
// b[1].addEventListener('click',f4);
// function f4(){
//     document.body.style.backgroundColor="#999";
// }


b[0].addEventListener('click',function() 
{
    document.body.style.backgroundColor="#333";
});
b[1].addEventListener('click',function()
{
    document.body.style.backgroundColor="#999";
});
