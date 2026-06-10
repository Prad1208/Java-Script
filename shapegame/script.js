let s1=document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
   s1.innerHTML=`<h1>${r}</h1>`;
//    s1.innerHTML="5";
});
s1.addEventListener("mouseleave",function(){
    // s1.style.backgroundColor="red";
//    s1.innerHTML="1";
    s1.innerHTML="<h1>1</h1>";
});
s1.addEventListener("dblclick",function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
}); 


let s2=document.getElementById("sq2");
let clr="green";
s2.addEventListener("mouseenter",function(){
    s2.style.backgroundColor=clr;
    if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="red";
    }
    else if(clr=="red"){
        s2.style.backgroundColor="red";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue";
        clr="green";
    }
});
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";

});

let s3=document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
//    s3.innerHTML=`<h1>${r},${g},${b}</h1>`;
    s3.style.backgroundColor=`rgb(${r},${g},${b})`;

});
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";

});



let s4=document.getElementById("sq4");
s4.addEventListener("click",function(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
   s1.style.backgroundColor=`rgb(${r},${g},0)`;
   s2.style.backgroundColor=`rgb(${r},0,${b})`;
   s3.style.backgroundColor=`rgb(0,${g},${b})`;
});
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";


});

let b=document.getElementsByTagName("button");
b[0].addEventListener('click',function() 
{
    document.body.style.backgroundColor="#333";
});
b[1].addEventListener('click',function()
{
    document.body.style.backgroundColor="#999";
});