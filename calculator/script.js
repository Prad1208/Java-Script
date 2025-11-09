let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
// let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }

    })
})

//Array.from() is a built-in JavaScript method
//  that converts array-like or iterable objects into a real array.
// Syntax:
// Array.from(iterableObject);
// NodeList → Array
// HTMLCollection → Array
// String → Array of characters
// Set / Map → Array