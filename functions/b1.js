setTimeout(function(){console.log("Hello");},2*1000);
setTimeout(function(){console.log("Mello");},3*1000);

for(let i=1;i<=10;i++){
    setTimeout(function(){console.log(i);},i*500);
}

for(let i=1;i<=10;i++){
    setTimeout(function(){console.log(11-i);},i*500);
}