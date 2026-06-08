// Producer Code
function someAPI(){
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

// Consumer Code
let p1=someAPI();
p1.then(
    (result)=>{
    console.log("Promise fulfilled :"+result);
},(error)=>{
    console.log("Promise Rejected :"+error);}
);
p1.catch(()=>{
    console.log("In catch rejected")
});

