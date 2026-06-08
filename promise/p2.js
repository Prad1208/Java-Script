function someAPI1(){
let p1=new Promise(function(resolve,reject){
    setTimeout(()=>{  
        console.log("Mein promise hoon");
        let x=Math.round(Math.random()*10+1);
    if(x%2==0)
        resolve(x);
    else
        reject(x);
    },3000)
});
return p1;
}

function someAPI2(){
let p1=new Promise(function(resolve,reject){
    setTimeout(()=>{  
        console.log("Mein promise hoon");
        let x=Math.round(Math.random()*10+1);
    if(x%2==0)
        resolve(x);
    else
        reject(x);
    },3000)
});
return p1;
}